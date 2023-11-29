import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import cakereducer from "./cake/cakeReducer";
import icereducer from "./iceCream/iceReducer";

const rootReducer = combineReducers({
  cake: cakereducer,
  ice: icereducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
