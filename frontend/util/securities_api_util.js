export const fetchNYSE = () => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/search?query=&limit=2200&exchange=NYSE&apikey=${window.modelingAPIKey}`,
        method: "GET",
        crossDomain: true
    })
);

export const fetchNasdaq = () => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/search?query=&limit=2000&exchange=NASDAQ&apikey=${window.modelingAPIKey}`,
        method: "GET",
        crossDomain: true
    })
);

export const fetchCurrentPrice = (ticker) => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/stock/real-time-price/${ticker}?apikey=${window.modelingAPIKey}`,
        method: "GET",
        crossDomain: true
    })
);


