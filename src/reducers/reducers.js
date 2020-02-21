import {SET_ARTICLE_BODY, SET_ARTICLE_TITLE, SET_ARTICLE_DATE_CREATED} from "../actions/actions";
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

const MHHApp = combineReducers({
    article: articleReducer
})
export default MHHApp