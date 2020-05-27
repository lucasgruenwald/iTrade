export const fetchNYSE = () => (
    $.ajax({
        url: `https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/v3/search?query=&exchange=NYSE&apikey=${window.modelingAPIKey}`,
        method: "GET",
        crossDomain: true
    })
);

export const fetchNasdaq = () => (
    $.ajax({
        url: `https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/v3/search?query=&exchange=NASDAQ&apikey=${window.modelingAPIKey}`,
        method: "GET",
        crossDomain: true
    })
);

export const fetchCurrentPrice = (ticker) => (
    $.ajax({
        url: `https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/v3/stock/real-time-price/${ticker}?apikey=${window.modelingAPIKey}`, 
        method: "GET",
        crossDomain: true,
    })
);


