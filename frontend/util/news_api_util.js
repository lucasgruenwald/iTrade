export const fetchNews = () => {
    return $.ajax({
        // method: "GET",
        url: `/api/news`
    })
}

export const fetchOneNews = (ticker) => {
    return $.ajax({
        method: "GET",
        url: `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${ticker}&apiKey=${window.newsAPIKey}` 
    })
}
