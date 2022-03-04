import configureStore from "./store/configureStore";
import * as projectActions from "./store/projects";
import * as bugActions from "./store/bugs";
import { getUnresolvedBugs } from "./store/bugs";

const store = configureStore();
const unsubscribe = store.subscribe(() => {
  console.log("Update UI, store changed!", store.getState());
});

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

// store.dispatch(bugActions.bugRemoved({ id: 1 }));
// store.dispatch(bugActions.bugRemoved({ id: 2 }));
// store.dispatch(bugActions.bugRemoved({ id: 3 }));
// store.dispatch(bugActions.bugRemoved({ id: 4 }));

unsubscribe();
const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());
console.log(x === y);
