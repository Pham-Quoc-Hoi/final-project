import { combineReducers } from "redux";
import loginReducer from "./../../src/_component/Login/LayoutLogin/duck/reducer";

const rootReducer = combineReducers({ loginReducer });

export default rootReducer;
