import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { BookPathReducer, StageReducer } from "../Reducers/StageReducer";
import { TypeReducer } from "../Reducers/TypeReducer";
import { UserReducer } from "../Reducers/UserReducer";

export default configureStore({
    reducer: {user: UserReducer,userType: TypeReducer,stage: StageReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(thunk),
    devTools: [composeWithDevTools]
})