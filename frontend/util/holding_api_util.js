export const createHolding = (holding) => (
    $.ajax({
        url: '/api/holdings',
        method: "POST",
        data: { holding }
    })
);


export const fetchHoldings = (user_id) => {
    return $.ajax({
        url: `/api/users/${user_id}/holdings/`,
        method: "GET",
        data: {user_id}
    })
};


export const findPosition = (holding) => (
    $.ajax({
        url: `/api/holdings/`,
        method: "GET",
        data: { holding }
    })
);
