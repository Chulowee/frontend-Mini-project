import {combineReducers} from "redux";
import bookingReducer from "./Booking";


const rootReducer = combineReducers({
    bookingResource: bookingReducer
});

export default rootReducer;
