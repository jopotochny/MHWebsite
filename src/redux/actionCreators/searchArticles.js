import {SET_SEARCH_RESULTS, SET_SHOW_ARTICLE} from "../actions/actions";
import axios from "axios";
import {GET_ARTICLES} from "../../requests/requestUrls";

export function fetchSearchResults(searchTerms){
    return function(dispatch) {
        return axios({
            method: 'get',
            url: GET_ARTICLES,
            responseType: 'application/json',
            params: {
                searchTerms: searchTerms
            }
        }).then(({data}) => {
            dispatch({
                type: SET_SEARCH_RESULTS,
                results: data.results
            });
        }).catch(function (error) {
            console.log(error.statusText);
        });
    }
}
