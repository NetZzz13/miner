import { createStore, combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import languageReducer from "./languageReducer";
import menuReducer from "./menuReducer";
import cartReducer from "./cartReducer";

let reducers = combineReducers({
  itemsPage: itemsReducer,
  language: languageReducer,
  menu: menuReducer,
  cart: cartReducer

});

let store = createStore(reducers);
window.store = store;

export default store;