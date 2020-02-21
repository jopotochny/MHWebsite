import React from 'react';
import '../styles/FAQPage.css';
import VisibleArticle from '../containers/VisibleArticle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export default class FAQPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerms: ""
        };
    }
    handleSearchChange = (e) => {
        this.setState({searchTerms: e.target.value})
    };
    handleSearchSubmit = (e) => {

    };
    render(){
        return ([
            <div className="faqNavBar">
                <div className="searchDiv">
                    <div className="searchIcon">
                        <FontAwesomeIcon icon={faSearch} style={{color: "white"}}/>
                    </div>
                    <form onSubmit={this.handleSearchSubmit}>
                        <input className="searchBar" type="text" value={this.state.searchTerms} onChange={this.handleSearchChange}/>
                    </form>
                </div>
            </div>,
            <div className="faqDiv">

                <VisibleArticle/>
            </div>
        ]);
    }
}