import React from 'react';
import '../styles/FAQPage.css';
import MHArticle from '../components/MHArticle';
import MHTable from '../components/MHTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {getRandomArticle, getAllArticles} from "../requests/articleRequests";
import { connect } from 'react-redux'
import Button from "@material-ui/core/Button/Button";
import {
    SET_ARTICLE_BODY,
    SET_ARTICLE_DATE_CREATED,
    SET_ARTICLE_TITLE,
    SET_SEARCH_RESULTS,
    SET_SHOW_ARTICLE, setSearchResults
} from "../redux/actions/actions";
import { withStyles } from '@material-ui/core/styles';
import {fetchSearchResults} from "../redux/actionCreators/searchArticles";
import MHSearchResults from "../components/MHSearchResults";

class FAQPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerms: "",
            initialRender: true
        };
    }
    setCurrentArticle = (result) => {
        this.props.setArticleTitle(result.title);
        this.props.setArticleBody(result.body);
        this.props.setArticleDateCreated(result.dateCreated);
        this.props.setShowArticle(true);
    };
    handleSearchChange = (e) => {
        this.setState({searchTerms: e.target.value})
    };
    handleSearchSubmit = (e) => {
        if(e){
            e.preventDefault();
        }
        let modifiedSearchTerms = this.state.searchTerms.replace(/" "/g, "-");
        this.props.fetchSearchResults(modifiedSearchTerms);
        this.props.setShowArticle(false);

    };
    handleRandomButtonClick = () => {
        let result = getRandomArticle();
        result.then((response) => {
            this.setCurrentArticle(response.data.results[0])
        });

    };
    handleResultClick = (index) => {
        this.setCurrentArticle(this.props.results[index])
    };
    generateSearchResultPages = (items, itemsPerContainer) => {
        let packedItems = [];
        for(let i = 0; i < items.length; i += itemsPerContainer){
            packedItems.push(<MHTable rows={items.slice(i, i + itemsPerContainer)} className="searchResultsTable"/>);
        }
        return packedItems;
    };

    showAllArticles = () => {
        let result = getAllArticles();
        result.then((response) => {
           this.props.setSearchResults(response.data.results);
           this.props.setShowArticle(false);
        });
    };

    generateArticlePreview = (article, numChars) => {
        let preview;
        article.length < numChars ? preview = article : preview = article.substring(0, numChars + 1).concat("...");
        return preview;
    };
    render(){
        const PREVIEW_LENGTH = 80;

        const RandomButton = withStyles({
            root: {
                color: "white",

            }
        })(Button);
        const rows = this.props.results.length !== 0 ? this.props.results.map((result, index) => {
            // we concatenate the ISO formatted date with a Z to get it in UCT format
            let dateCreated = new Date(result['date_created'].concat("Z"));
            return {
                row: [
                    <div className="searchResultsCell" onClick={() => (this.handleResultClick(index))}>
                        <div className="resultContainer">
                            <p className="resultTitle">{result.title}</p>
                        </div>
                        <div className="resultContainer">
                            <p className="resultPreview">{this.generateArticlePreview(result.body, PREVIEW_LENGTH)}</p>
                        </div>
                        <div className="resultContainer">
                            <p className="resultDateCreated">Uploaded: {dateCreated.toString()}</p>
                        </div>
                    </div>

                ],
                className: "searchResultsRow"
            }
        })
        : [];

        const rowsPerTable = 5;
        if(this.state.initialRender){
            this.setState({initialRender: false})
            this.showAllArticles();
        }
        return (
            <div className="faqDiv">
                <div className="faqNavBar">
                    <div className="navBarItems">
                        <div className="randomButtonDiv">
                            <RandomButton className="randomButton" onClick={this.handleRandomButtonClick}>Random</RandomButton>
                        </div>
                        <div className="searchIcon">
                            <FontAwesomeIcon icon={faSearch} style={{color: "white"}}/>
                        </div>
                        <div className="searchBarDiv">
                            <form onSubmit={this.handleSearchSubmit}>
                                <input className="searchBar" type="text" value={this.state.searchTerms} onChange={this.handleSearchChange}/>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>,
                <div className="contentDiv">
                    {this.props.showArticle
                        ? <MHArticle title={this.props.title} body={this.props.body}/>
                        : <MHSearchResults
                             className="searchResults"
                             paginationDivClassName="searchPaginationDiv"
                             pages={this.generateSearchResultPages(rows, rowsPerTable)}
                        />
                    }

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        title: state.article.title,
        body: state.article.body,
        results: state.results,
        showArticle: state.showArticle
    });
};

const mapDispatchToProps = dispatch => {
    return {
        setArticleTitle: (title) =>
            dispatch({
                type: SET_ARTICLE_TITLE,
                title
            }),
        setArticleBody: (body) =>
            dispatch({
                type: SET_ARTICLE_BODY,
                body
            }),
        setArticleDateCreated: (date) =>
            dispatch({
                type: SET_ARTICLE_DATE_CREATED,
                date
            }),
        setSearchResults: (results) =>
            dispatch(setSearchResults(results)),
        fetchSearchResults: (searchTerms) =>
            dispatch(fetchSearchResults(searchTerms)),
        setShowArticle: (showArticle) =>
            dispatch({
                type: SET_SHOW_ARTICLE,
                showArticle
            })
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FAQPage);