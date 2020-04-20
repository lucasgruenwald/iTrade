export const fetchNews = () => {
    return $.ajax({
        method: "GET",
        url: `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${window.newsAPIKey}`
    })
}

export const fetchOneNews = (ticker) => {
    return $.ajax({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${ticker}&apiKey=${window.newsAPIKey}` 
    })
}
