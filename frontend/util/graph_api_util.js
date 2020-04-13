export const fetchDay = (ticker) => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/historical-chart/5min/${ticker}`,
    })
)