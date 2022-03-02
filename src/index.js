import store from "./store/configureStore";
import * as actions from "./store/bugs";

const unsubscribe = store.subscribe(() => {
  console.log("Update UI, store changed!", store.getState());
});

store.dispatch(actions.bugAdded({ description: "Un simple bug 1" }));
store.dispatch(actions.bugAdded({ description: "Un simple bug 2" }));
store.dispatch(actions.bugAdded({ description: "Un simple bug 3" }));
store.dispatch(actions.bugAdded({ description: "Un simple bug 4" }));

store.dispatch(actions.bugResolved({ id: 1 }));
store.dispatch(actions.bugResolved({ id: 2 }));
store.dispatch(actions.bugResolved({ id: 3 }));
store.dispatch(actions.bugResolved({ id: 4 }));

store.dispatch(actions.bugRemoved({ id: 1 }));
store.dispatch(actions.bugRemoved({ id: 2 }));
store.dispatch(actions.bugRemoved({ id: 3 }));
store.dispatch(actions.bugRemoved({ id: 4 }));
unsubscribe();
console.log(store.getState());
