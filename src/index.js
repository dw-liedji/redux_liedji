import configureStore from "./store/configureStore";
import { loadBugs } from "./store/bugs";
import { addBug, resolveBug, assignBugToUser } from "./store/bugs";

const store = configureStore();

// store.dispatch(addBug({ description: "create a second bug by liedji" }));
// UI Layer
store.dispatch(loadBugs());

setTimeout(() => {
  store.dispatch(assignBugToUser(1, 2));
}, 2000);
