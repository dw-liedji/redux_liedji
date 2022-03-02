import store from "./store/store";
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

unsubscribe();

store.dispatch(actions.bugRemoved({ id: 1 }));
console.log(store.getState());
