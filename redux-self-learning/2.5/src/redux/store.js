import { createStore } from "redux";
import counterReducer from "./counter/counterReducer.js";

const store = createStore(counterReducer);
export default store;
