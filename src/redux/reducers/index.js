import {combineReducers} from "redux";
import car from "./car";
import name from "./name";



const rootReducer = () => combineReducers({
    car,
    name 
});

export default rootReducer;