export const fetchStockProfile = (ticker) => (
    $.ajax ({
        method: 'GET',
        url: `https://financialmodelingprep.com/api/v3/company/profile/${ticker}`
    })
)