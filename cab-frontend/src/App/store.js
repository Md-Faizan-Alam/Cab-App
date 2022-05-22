import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { TypeReducer } from "../Reducers/TypeReducer";
import { UserReducer } from "../Reducers/UserReducer";

export default configureStore({
    reducer: {user: UserReducer,userType: TypeReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(thunk),
    devTools: [composeWithDevTools]
})