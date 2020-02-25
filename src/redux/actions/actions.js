export const SET_ARTICLE_TITLE = 'SET_ARTICLE_TITLE';
export const SET_ARTICLE_BODY = 'SET_ARTICLE_BODY';
export const SET_ARTICLE_DATE_CREATED = 'SET_ARTICLE_DATE_CREATED';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const SET_SHOW_ARTICLE = 'SET_SHOW_ARTICLE';

export function setArticleTitle(title){
    return { type: SET_ARTICLE_TITLE, title}
}

export function setArticleBody(body){
    return {type: SET_ARTICLE_BODY, body}
}

export function setArticleDateCreated(date){
    return {type: SET_ARTICLE_DATE_CREATED, date}
}

export function setSearchResults(results){
    return {type: SET_SEARCH_RESULTS, results}
}

export function setShowArticle(showArticle){
    return {type: SET_SHOW_ARTICLE, showArticle}
}
