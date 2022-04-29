import { combineReducers } from "redux";
import reducer from "./loginreducer";

 const Rootreducer =combineReducers({
    state : reducer
})
export default Rootreducer;

