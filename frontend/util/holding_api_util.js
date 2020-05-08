// export const createHolding = (holding) => (
//     $.ajax({
//         url: '/api/holdings',
//         method: "POST",
//         data: { holding }
//     })
// );

export const fetchHoldings = (user_id) => {
    return $.ajax({
        url: `/api/users/${user_id}/holdings/`,
        method: "GET",
        data: {user_id}
    })
};

export const findPosition = (holding) => (
    $.ajax({
        url: `/api/holdings/:id`,
        method: "GET",
        data: holding
    })
);

// export const updateCash = (submitData) => (
//     $.ajax({
//         url: `/api/users/${submitData.user_id}`,
//         method: "PATCH",
//         data: { submitData }
//     })
// );

