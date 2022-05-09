import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productReducer } from './Reducers/product-reducer';
const rootReducer = combineReducers({
    khajana: productReducer
})
const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk)));
export default store;