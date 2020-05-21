export const fetchInfo = (ticker) => (
    $.ajax ({
        method: 'GET',
        url: `http://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/v3/company/profile/${ticker}?apikey=${window.modelingAPIKey}`,
        crossDomain: true
    })
)
