import {
    GET_CIRCUITS_FAILED,    
    GET_CIRCUITS_SUCCESS,
    GET_CIRCUITS_LOAD,
    DELETE_CIRCUIT,
    GET_CIRCUIT,
    EDIT_CIRCUIT,
  } from "../const/circuit";
  
  const initialeState = {
    circuit: [],
    loadcircuit: false,
    errors: null,
    user: [],
    editcircuit: "",
  };
  
  export const circuitReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
      case GET_CIRCUITS_LOAD:
        return { ...state, loadcircuit: true };
      case GET_CIRCUITS_SUCCESS:
        return { ...state, circuit: payload, loadcircuit: false };
      case GET_CIRCUITS_FAILED:
        return { ...state, loadcircuit: false, errors: payload };
      case  GET_CIRCUIT:
        return { ...state, user: payload };
      case  DELETE_CIRCUIT:
        return { ...state, user: payload };
      case EDIT_CIRCUIT:
        return { ...state, loadcircuit: false, circuit: payload };
      default:
        return state;
    }
  };
  