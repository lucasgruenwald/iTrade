import {fetchNews} from "../util/news_api_util"

export const RECEIVE_NEWS = "RECEIVE_NEWS";

const receiveTheNews = news => ({
    type: RECEIVE_NEWS,
    news
})

export const receiveNews = () => dispatch => fetchNews()
    .then(news => dispatch(receiveTheNews(news)))
