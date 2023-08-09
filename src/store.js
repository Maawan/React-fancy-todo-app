import { createStore, combineReducers } from "redux";
import reducer from "./context/reducer";


const rootReducer = combineReducers({
  reducer,
});

const store = createStore(rootReducer);

export default store;