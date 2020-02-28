import {
    SET_ARTICLE_BODY,
    SET_ARTICLE_TITLE,
    SET_ARTICLE_DATE_CREATED,
    SET_SEARCH_RESULTS,
    SET_SHOW_ARTICLE
} from "../actions/actions";
import { combineReducers } from 'redux';

const initialArticleState = {
    title: "",
    body: "",
    dateCreated: ""
};

function articleReducer(state = initialArticleState, action){
    switch (action.type) {
        case SET_ARTICLE_BODY:
            return Object.assign({}, state, {
                body: action.body
            });
        case SET_ARTICLE_TITLE:
            return Object.assign({}, state, {
                title: action.title
            });
        case SET_ARTICLE_DATE_CREATED:
            return Object.assign({}, state, {
                dateCreated: action.date
            });
        default:
            return state;

    }
};

const initialSearchState = [];

function searchReducer(state = initialSearchState, action) {
    switch (action.type) {
        case SET_SEARCH_RESULTS:
            return action.results;
        default:
            return state;
    }
}

const initialShowArticleState = false;

function showArticleReducer(state = initialShowArticleState, action) {
    switch (action.type) {
        case SET_SHOW_ARTICLE:
            return action.showArticle;
        default:
            return state;
    }
}

const MHHApp = combineReducers({
    article: articleReducer,
    results: searchReducer,
    showArticle: showArticleReducer
});
export default MHHApp