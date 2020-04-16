import {fetchNews, fetchOneNews } from "../util/news_api_util"

export const RECEIVE_NEWS = "RECEIVE_NEWS";
export const RECEIVE_ONE_NEWS = "RECEIVE_ONE_NEWS";

const receiveTheNews = news => ({
    type: RECEIVE_NEWS,
    news
})

const receiveTheOneNews = news => ({
    type: RECEIVE_NEWS,
    news
})

export const receiveNews = () => dispatch => fetchNews()
    .then(news => dispatch(receiveTheNews(news)))

export const receiveOneNews = (ticker) => dispatch => fetchOneNews(ticker)
    .then(news => dispatch(receiveTheOneNews(news)))
