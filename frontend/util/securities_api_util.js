export const fetchNYSE = () => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/search?query=&limit=&exchange=nyse`,
        method: "GET"
    })
);

export const fetchNasdaq = () => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/search?query=&limit=&exchange=NASDAQ`,
        method: "GET"
    })
);

export const fetchCurrentPrice = (ticker) => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/stock/real-time-price/${ticker}`,
        method: "GET"
    })
);


