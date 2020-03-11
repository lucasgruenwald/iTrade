export const createHolding = (holding) => (
    $.ajax({
        url: '/api/holdings',
        method: "POST",
        data: { holding }
    })
);

export const fetchHolding = (holding) => (
    $.ajax({
        url: `/api/holdings/`,
        method: "GET",
        data: { holding }
    })
);

