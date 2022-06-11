import { combineReducers } from "redux";
import {chaffeureReducer} from "./chauffeure"
import {busReducer} from "./bus"
import {chambreReducer} from "./chambre"
import {gouvernerantReducer} from "./gouvernerant"
import {facturationReducer} from "./facturation"
import {hotelReducer} from "./hotel"
import {volReducer} from "./vol"
import {circuitReducer} from "./circuit"
import {userReducer} from "./user"
export const rootReducer = combineReducers({userReducer,busReducer,chaffeureReducer,circuitReducer,volReducer,chambreReducer,hotelReducer,gouvernerantReducer,facturationReducer});
