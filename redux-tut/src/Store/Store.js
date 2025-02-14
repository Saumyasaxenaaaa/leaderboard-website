import { legacy_createStore } from "redux";
import rootReducers from "../Services/Reducers/rootReducers";

const store = legacy_createStore(rootReducers)

export default store