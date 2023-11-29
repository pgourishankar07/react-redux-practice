import { createStore } from "redux";
import cakereducer from "./cake/cakeReducer";

const store = createStore(cakereducer);

export default store;
