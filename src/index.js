import configureStore from "./store/configureStore";
import * as projectActions from "./store/projects";
import * as bugActions from "./store/bugs";
import * as userActions from "./store/users";
import { getUnresolvedBugs } from "./store/bugs";
import { getBugsByUser } from "./store/bugs";

const store = configureStore();
const unsubscribe = store.subscribe(() => {
  console.log("Update UI, store changed!", store.getState());
});

store.dispatch(userActions.userAdded({ name: "Liedji" }));
store.dispatch(userActions.userAdded({ name: "Wenkack" }));
store.dispatch(userActions.userAdded({ name: "Brice" }));
store.dispatch(userActions.userAdded({ name: "Odile" }));

store.dispatch(
  projectActions.projectAdded({ description: "Un simple project 1" })
);
store.dispatch(
  projectActions.projectAdded({ description: "Un simple project 2" })
);
store.dispatch(
  projectActions.projectAdded({ description: "Un simple project 3" })
);
store.dispatch(
  projectActions.projectAdded({ description: "Un simple project 4" })
);

store.dispatch(projectActions.projectResolved({ id: 1 }));
store.dispatch(projectActions.projectResolved({ id: 2 }));
// store.dispatch(projectActions.projectResolved({ id: 3 }));
// store.dispatch(projectActions.projectResolved({ id: 4 }));

// store.dispatch(projectActions.projectRemoved({ id: 1 }));
// store.dispatch(projectActions.projectRemoved({ id: 2 }));
// store.dispatch(projectActions.projectRemoved({ id: 3 }));
// store.dispatch(projectActions.projectRemoved({ id: 4 }));

store.dispatch(bugActions.bugAdded({ description: "Un simple bug 1" }));
store.dispatch(bugActions.bugAdded({ description: "Un simple bug 2" }));
store.dispatch(bugActions.bugAdded({ description: "Un simple bug 3" }));
store.dispatch(bugActions.bugAdded({ description: "Un simple bug 4" }));

store.dispatch(bugActions.bugResolved({ id: 1 }));
store.dispatch(bugActions.bugResolved({ id: 2 }));
// store.dispatch(bugActions.bugResolved({ id: 3 }));
// store.dispatch(bugActions.bugResolved({ id: 4 }));

store.dispatch(bugActions.bugAssignedToUser({ id: 1, userId: 1 }));
store.dispatch(bugActions.bugAssignedToUser({ id: 2, userId: 1 }));
store.dispatch(bugActions.bugAssignedToUser({ id: 3, userId: 1 }));
store.dispatch(bugActions.bugAssignedToUser({ id: 4, userId: 3 }));

unsubscribe();

// console.log(store.getState().entities.bugs);
const bugOfUser1 = getBugsByUser(1)(store.getState());
console.log(bugOfUser1);
store.dispatch((dispatch, getState) => {
  dispatch({
    type: "bugsReceived",
    payload: { bugs: [1, 2, 3, 4, 5, 6] },
  });
});

store.dispatch({ type: "error", payload: { message: "An error ocurred." } });
