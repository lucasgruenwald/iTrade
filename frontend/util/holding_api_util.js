export const createHolding = (holding) => (
    $.ajax({
        url: `/api/users/${holding.user_id}/holdings`,
        method: "POST",
        data: {holding}
    })
);

export const deleteHolding = (holding) => (
    $.ajax({
        url: `/api/users/${holding.user_id}/holdings/:id`,
        method: "DELETE",
        data: { holding }
    })
)

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

export const updateCashPos = (newCash) => (
    $.ajax({
        url: `/api/users/${newCash.id}`,
        method: "PATCH",
        data: newCash
    })
);

