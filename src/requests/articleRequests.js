import axios from 'axios';
import {GET_ARTICLES, GET_RANDOM_ARTICLE} from "./requestUrls";

export async function getRandomArticle(){
    axios.get(GET_RANDOM_ARTICLE).then(
      response => {
          return response.results;
      }
    );
}

export async function searchArticles(searchTerms){
    axios.get(GET_ARTICLES.concat(searchTerms)).then(
      response => {
          return response.results
      }
    );
}