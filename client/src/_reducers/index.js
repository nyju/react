// 여러개의 reducer  CombineReducer를 이용하여 Root Reducer 에서 하나로 합쳐줌

import { combineReducers } from "redux";
import user from './user_reducer';


const rootReducer = combineReducers({
    user
})

export default rootReducer;
