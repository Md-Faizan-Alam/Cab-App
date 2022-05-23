import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { OptionReducer } from "../Reducers/OptionReducer";
import { PhoneReducer } from "../Reducers/PhoneReducer";
import { StageReducer } from "../Reducers/StageReducer";
import { TripReducer } from "../Reducers/TripReducer";
import { TypeReducer } from "../Reducers/TypeReducer";
import { UserReducer } from "../Reducers/UserReducer";

export default configureStore({
    reducer: {user: UserReducer,userType: TypeReducer,stage: StageReducer,phone: PhoneReducer,options: OptionReducer,trip: TripReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: [composeWithDevTools]
})