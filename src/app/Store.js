import { applyMiddleware, legacy_createStore as createStore  } from "redux";
import thunk from "redux-thunk";
import Rootreducer from '../reducers/rootreducer';

export const store =createStore(Rootreducer ,applyMiddleware(thunk))