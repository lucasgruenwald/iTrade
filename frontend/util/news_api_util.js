export const fetchNews = () => {
    return $.ajax({
        method: "GET",
        url: `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=30c43750465046fd8142ea8a03548126`
    })
}

export const fetchOneNews = (ticker) => {
    return $.ajax({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${ticker}&apiKey=30c43750465046fd8142ea8a03548126` 
    })
}
