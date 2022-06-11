import {
    GET_FACTURATIONS_FAILED,    
    GET_FACTURATIONS_SUCCESS,
    GET_FACTURATIONS_LOAD,
    DELETE_FACTURATION,
    GET_FACTURATION,
    EDIT_FACTURATION,
  } from "../const/facturation";


  
  const initialeState = {
    facturation: [],
    loadfacturation: false,
    errors: null,
    user: [],
    editfacturation: "",
  };
  
  export const facturationReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
      case  GET_FACTURATIONS_LOAD:
        return { ...state, loadfacturation: true };
      case GET_FACTURATIONS_SUCCESS:
        return { ...state, facturation: payload, loadfacturation: false };
      case  GET_FACTURATIONS_FAILED:
        return { ...state, loadfacturation: false, errors: payload };
      case GET_FACTURATION:
        return { ...state, user: payload };
      case  DELETE_FACTURATION:
        return { ...state, user: payload };
      case EDIT_FACTURATION:
        return { ...state, loadfacturation: false, facturation: payload };
      default:
        return state;
    }
  };
  