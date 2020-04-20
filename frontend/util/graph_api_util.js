// export const fetchDailyPrices = symbol => (
//     $.ajax({
//         method: "GET",
//         url: `https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${window.iexAPIKey}`
//     })
// )

export const fetchDailyPrices = symbol => (
    $.ajax({
        method: "GET",
        url: `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&type=stock&outputsize=390&format=JSON&dp=2&timezone=America/Los_Angeles&previous_close=true&apikey=${window.twelveAPIKey}`
    })
)

// export const fetchPrices = (symbol, timeFrame) => {
//     return $.ajax({
//         method: "GET",
//         url: `https://cloud.iexapis.com/stable/stock/${symbol}/chart/${timeFrame}?chartIEXOnly=true&token=${window.iexAPIKey}`,
//     })
// }

export const fetch5D = (symbol) => {
    return $.ajax({
        method: "GET",
        url: `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=5min&type=stock&outputsize=390&format=JSON&dp=2&timezone=America/Los_Angeles&previous_close=true&apikey=${window.twelveAPIKey}`,
    })
}

export const fetch1M = (symbol) => {
    return $.ajax({
        method: "GET",
        url: `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=30min&type=stock&outputsize=390&format=JSON&dp=2&timezone=America/Los_Angeles&previous_close=true&apikey=${window.twelveAPIKey}`,
    })
}

export const fetch3M = (symbol) => {
    return $.ajax({
        method: "GET",
        url: ``,
    })
}

export const fetch1Y = (symbol) => {
    return $.ajax({
        method: "GET",
        url: ``,
    })
}
