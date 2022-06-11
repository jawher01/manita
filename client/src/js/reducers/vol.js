import {
    GET_VOLS_FAILED,    
    GET_VOLS_SUCCESS,
    GET_VOLS_LOAD,
    DELETE_VOL,
    GET_VOL,
    EDIT_VOL,
  } from "../const/vol";
  

  const initialeState = {
    vol: [],
    loadvol: false,
    errors: null,
    user: [],
    editvol: "",
  };
  
  export const volReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
      case GET_VOLS_LOAD:
        return { ...state, loadvol: true };
      case GET_VOLS_SUCCESS:
        return { ...state, vol: payload, loadvol: false };
      case GET_VOLS_FAILED:
        return { ...state, loadvol: false, errors: payload };
      case GET_VOL:
        return { ...state, user: payload };
      case  DELETE_VOL:
        return { ...state, user: payload };
      case EDIT_VOL:
        return { ...state, loadvol: false, vol: payload };
      default:
        return state;
    }
  };
  