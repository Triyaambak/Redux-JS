import * as ACTIONS from "./actionTypes.js";

let lastId = 0;

const reducer = (state = [], action) => {
    if (action.type === ACTIONS.BUG_ADDED) {
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false,
            },
        ];
    } else if (action.type === ACTIONS.BUG_REMOVED) {
        return state.filter((bug) => bug === action.payload.id);
    } else if (action.type == ACTIONS.BUG_RESOLVED) {
        return state.map((bug) =>
            bug.id === action.payload.id ? { ...bug, resolved: true } : bug
        );
    }
    return state;
};

export default reducer;
