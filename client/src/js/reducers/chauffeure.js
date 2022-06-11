import {
    GET_CHAUFFEURES_FAILED,    
    GET_CHAUFFEURES_SUCCESS,
    GET_CHAUFFEURES_LOAD,
    DELETE_CHAUFFEURE,
    GET_CHAUFFEURE,
    EDIT_CHAUFFEURE,
  } from "../const/chauffeur";
 
  
  const initialeState = {
    chauffeure: [],
    loadchauffeure: false,
    errors: null,
    user: [],
    editchauffeure: "",
  };
  
  export const chaffeureReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
      case GET_CHAUFFEURES_LOAD:
        return { ...state, loadchauffeure: true };
      case  GET_CHAUFFEURES_SUCCESS:
        return { ...state, chauffeure: payload, loadchauffeure: false };
      case  GET_CHAUFFEURES_FAILED:
        return { ...state, loadchauffeure: false, errors: payload };
      case GET_CHAUFFEURE:
        return { ...state, user: payload };
      case  DELETE_CHAUFFEURE:
        return { ...state, user: payload };
      case EDIT_CHAUFFEURE:
        return { ...state, loadchauffeure: false, chauffeure: payload };
      default:
        return state;
    }
  };
  