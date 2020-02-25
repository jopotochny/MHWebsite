import React from 'react';
import '../styles/FAQPage.css';
import MHArticle from '../components/MHArticle';
import MHTable from '../components/MHTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {getRandomArticle, searchArticles} from "../requests/articleRequests";
import { connect } from 'react-redux'
import Button from "@material-ui/core/Button/Button";
import {
    SET_ARTICLE_BODY,
    SET_ARTICLE_DATE_CREATED,
    SET_ARTICLE_TITLE,
    SET_SEARCH_RESULTS,
    SET_SHOW_ARTICLE
} from "../redux/actions/actions";
import { withStyles } from '@material-ui/core/styles';
import {fetchSearchResults} from "../redux/actionCreators/searchArticles";

class FAQPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerms: "",
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
        e.preventDefault();
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
    render(){
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
                        <p>{result.title}</p>
                    </div>
                    ,
                    <div className="searchResultsCell" onClick={() => (this.handleResultClick(index))}>
                        <p>Uploaded: {dateCreated.toString()}</p>
                    </div>
                ],
                className: "searchResultsRow"
            }
        })
        : [];
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
                        : <MHTable rows={rows} className="searchResultsTable"/>
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
        fetchSearchResults: (searchTerms) =>
            dispatch(fetchSearchResults(searchTerms))
        ,
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