import configureStore from "./store/configureStore";
import * as actions from "./store/projects";

const store = configureStore();
const unsubscribe = store.subscribe(() => {
  console.log("Update UI, store changed!", store.getState());
});

store.dispatch(actions.projectAdded({ description: "Un simple project 1" }));
store.dispatch(actions.projectAdded({ description: "Un simple project 2" }));
store.dispatch(actions.projectAdded({ description: "Un simple project 3" }));
store.dispatch(actions.projectAdded({ description: "Un simple project 4" }));

store.dispatch(actions.projectResolved({ id: 1 }));
store.dispatch(actions.projectResolved({ id: 2 }));
store.dispatch(actions.projectResolved({ id: 3 }));
store.dispatch(actions.projectResolved({ id: 4 }));

store.dispatch(actions.projectRemoved({ id: 1 }));
store.dispatch(actions.projectRemoved({ id: 2 }));
store.dispatch(actions.projectRemoved({ id: 3 }));
store.dispatch(actions.projectRemoved({ id: 4 }));

// store.dispatch(actions.bugAdded({ description: "Un simple bug 1" }));
// store.dispatch(actions.bugAdded({ description: "Un simple bug 2" }));
// store.dispatch(actions.bugAdded({ description: "Un simple bug 3" }));
// store.dispatch(actions.bugAdded({ description: "Un simple bug 4" }));

// store.dispatch(actions.bugResolved({ id: 1 }));
// store.dispatch(actions.bugResolved({ id: 2 }));
// store.dispatch(actions.bugResolved({ id: 3 }));
// store.dispatch(actions.bugResolved({ id: 4 }));

// store.dispatch(actions.bugRemoved({ id: 1 }));
// store.dispatch(actions.bugRemoved({ id: 2 }));
// store.dispatch(actions.bugRemoved({ id: 3 }));
// store.dispatch(actions.bugRemoved({ id: 4 }));
unsubscribe();
