import { createStore, combineReducers } from "redux";
import cakereducer from "./cake/cakeReducer";
import icereducer from "./iceCream/iceReducer";

const rootReducer = combineReducers({
  cake: cakereducer,
  ice: icereducer,
});

const store = createStore(rootReducer);

export default store;
