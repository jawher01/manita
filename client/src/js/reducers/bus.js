import {
    GET_BUSS_FAILED,    
    GET_BUSS_SUCCESS,
    GET_BUSS_LOAD,
    DELETE_BUS,
    GET_BUS,
    EDIT_BUS,
  } from "../const/bus";
  
  const initialeState = {
    bus: [],
    loadbuss: false,
    errors: null,
    user: [],
    editbus: "",
  };
  
  export const busReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
      case GET_BUSS_LOAD:
        return { ...state, loadbuss: true };
      case GET_BUSS_SUCCESS:
        return { ...state, bus: payload, loadbuss: false };
      case GET_BUSS_FAILED:
        return { ...state, loadbuss: false, errors: payload };
      case GET_BUS:
        return { ...state, user: payload };
      case  DELETE_BUS:
        return { ...state, user: payload };
      case EDIT_BUS:
        return { ...state, loadbuss: false, bus: payload };
      default:
        return state;
    }
  };
  