import { legacy_createStore as createStore } from "redux";
import { changeCount } from "./reducers";

export const store = createStore(changeCount, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 