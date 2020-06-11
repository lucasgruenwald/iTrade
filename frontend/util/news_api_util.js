export const fetchNews = () => {
    return $.ajax({
        // method: "GET",
        url: `/api/news`
    })
}

export const fetchOneNews = (ticker) => {
    // console.log(ticker)
    return $.ajax({
        method: "GET",
        url: `/api/newsone`,
        // url: `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${ticker}&apiKey=${window.newsAPIKey}` 
        data: { data_val: JSON.stringify(ticker) }
        
    })
}
