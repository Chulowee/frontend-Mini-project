const initialState = {
    booking: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_BOOKING":
            return {
                ...state,
                booking: [...state.booking, payload]
            };
        default:
            return state;
    }
}
