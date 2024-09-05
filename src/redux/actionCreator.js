const bugAdded = (actionType, description) => {
    return {
        type: actionType,
        payload: {
            description,
        },
    };
};

const bugRemoved = (actionType, id) => {
    return {
        type: actionType,
        payload: {
            id,
        },
    };
};

const bugResolved = (actionType, id) => {
    return {
        type: actionType,
        payload: {
            id,
        },
    };
};

export { bugAdded, bugRemoved, bugResolved };
