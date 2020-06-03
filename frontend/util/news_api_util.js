export const fetchNews = () => {
    return $.ajax({
        method: "GET",
        url: `https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${window.newsAPIKey}`
    })
}

export const fetchOneNews = (ticker) => {
    return $.ajax({
        method: "GET",
        url: `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${ticker}&apiKey=${window.newsAPIKey}` 
    })
}
