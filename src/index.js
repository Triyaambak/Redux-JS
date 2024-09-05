import store from "./redux/store.js";
import * as ACTIONS from "./redux/actionTypes.js";
import { bugAdded, bugRemoved, bugResolved } from "./redux/actionCreator.js";

const unsubscribe = store.subscribe(() => {
    console.log("Store changed", store.getState());
});

store.dispatch(bugAdded(ACTIONS.BUG_ADDED, "I want to go to gym"));

store.dispatch(bugResolved(ACTIONS.BUG_RESOLVED, 1));

store.dispatch(bugRemoved(ACTIONS.BUG_REMOVED, 1));

unsubscribe();
