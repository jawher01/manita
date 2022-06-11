import {
    GET_GOUVERNERANTS_FAILED,    
    GET_GOUVERNERANTS_SUCCESS,
    GET_GOUVERNERANTS_LOAD,
    DELETE_GOUVERNERANT,
    GET_GOUVERNERANT,
    EDIT_GOUVERNERANT,
  } from "../const/gouvernerant";

 
  
  const initialeState = {
    gouvernerant: [],
    loadgouvernerant: false,
    errors: null,
    user: [],
    editgouvernerant: "",
  };
  
  export const gouvernerantReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
      case GET_GOUVERNERANTS_LOAD:
        return { ...state, loadgouvernerant: true };
      case GET_GOUVERNERANTS_SUCCESS:
        return { ...state, gouvernerant: payload, loadgouvernerant: false };
      case  GET_GOUVERNERANTS_FAILED:
        return { ...state, loadgouvernerant: false, errors: payload };
      case GET_GOUVERNERANT:
        return { ...state, user: payload };
      case  DELETE_GOUVERNERANT:
        return { ...state, user: payload };
      case EDIT_GOUVERNERANT:
        return { ...state, loadgouvernerant: false, gouvernerant: payload };
      default:
        return state;
    }
  };
  