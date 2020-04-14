export const fetchDailyPrices = symbol => (
    $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices?token=pk_c12f0279a58e44af91d34d80a582cabd`
    })
)

export const fetchPrices = (symbol, timeFrame) => {
    return $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/chart/${timeFrame}?chartIEXOnly=true&token=pk_c12f0279a58e44af91d34d80a582cabd`,
    })
}

// export const fetchDay = (ticker) => (
//     $.ajax({
//         url: `https://financialmodelingprep.com/api/v3/historical-chart/5min/${ticker}`,
//     })
// )