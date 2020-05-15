
export const fetchDailyPrices = symbol => (
    $.ajax({
        method: "GET",
        url: `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1min&type=stock&outputsize=390&format=JSON&dp=2&timezone=America/Los_Angeles&previous_close=true&apikey=${window.twelveAPIKey}`
    })
)

export const fetch5D = (symbol) => {
    return $.ajax({
        method: "GET",
        url: `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=5min&type=stock&outputsize=390&format=JSON&dp=2&timezone=America/Los_Angeles&previous_close=true&apikey=${window.twelveAPIKey}`,
    })
}

export const fetch1M = (symbol) => {
    return $.ajax({
        method: "GET",
        url: `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=30min&type=stock&outputsize=275&format=JSON&dp=2&timezone=America/Los_Angeles&previous_close=true&apikey=${window.twelveAPIKey}`,
    })
}

export const fetch3M = (symbol) => {
    return $.ajax({
        method: "GET",
        url: `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1h&type=stock&outputsize=440&format=JSON&dp=2&timezone=America/Los_Angeles&previous_close=true&apikey=${window.twelveAPIKey}`,
    });
}

export const fetch1Y = (symbol) => {
    return $.ajax({
        method: "GET",
        url: `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&type=stock&outputsize=253&format=JSON&dp=2&timezone=America/Los_Angeles&previous_close=true&apikey=${window.twelveAPIKey}`,
    })
}


export const fetchDailyPricesAll = (string) => {
    return $.ajax({
        method: "GET",
        url: `https://api.twelvedata.com/time_series?symbol=${string}&interval=1min&type=stock&outputsize=390&format=JSON&dp=2&timezone=America/Los_Angeles&previous_close=true&apikey=${window.twelveAPIKey}`,
    });
}

export const fetch5DAll = (string) => {
    return $.ajax({
        method: "GET",
        url: `https://api.twelvedata.com/time_series?symbol=${string}&interval=5min&type=stock&outputsize=390&format=JSON&dp=2&timezone=America/Los_Angeles&previous_close=true&apikey=${window.twelveAPIKey}`,
    })
}

export const fetch1MAll = (string) => {
    return $.ajax({
        method: "GET",
        url: `https://api.twelvedata.com/time_series?symbol=${string}&interval=30min&type=stock&outputsize=275&format=JSON&dp=2&timezone=America/Los_Angeles&previous_close=true&apikey=${window.twelveAPIKey}`,
    });
}

export const fetch3MAll = (string) => {
    return $.ajax({
        method: "GET",
        url: `https://api.twelvedata.com/time_series?symbol=${string}&interval=1h&type=stock&outputsize=440&format=JSON&dp=2&timezone=America/Los_Angeles&previous_close=true&apikey=${window.twelveAPIKey}`,
    })
}

export const fetch1YAll = (string) => {
    return $.ajax({
        method: "GET",
        url: `https://api.twelvedata.com/time_series?symbol=${string}&interval=1day&type=stock&outputsize=253&format=JSON&dp=2&timezone=America/Los_Angeles&previous_close=true&apikey=${window.twelveAPIKey}`,
    })
}

