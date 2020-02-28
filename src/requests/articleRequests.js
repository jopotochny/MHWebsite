import axios from 'axios';
import {GET_ALL_ARTICLES, GET_ARTICLES, GET_RANDOM_ARTICLE} from "./requestUrls";

export async function getRandomArticle(){
    let response =  await axios({
        method: 'get',
        url: GET_RANDOM_ARTICLE,
        responseType: 'application/json'
    }).catch(function (error) {
        console.log(error);
    });
    return response
}

export async function searchArticles(searchTerms){
    let response = await axios({
        method: 'get',
        url: GET_ARTICLES,
        responseType: 'application/json',
        params: {
            searchTerms: searchTerms
        }
    }).catch(function (error) {
        console.log(error.statusText);
    });
    return response
}

export async function getAllArticles(){
    let response =  await axios({
        method: 'get',
        url: GET_ALL_ARTICLES,
        responseType: 'application/json'
    }).catch(function (error) {
        console.log(error);
    });
    return response
}