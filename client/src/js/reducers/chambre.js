import {
    GET_CHAMBRES_FAILED,    
    GET_CHAMBRES_SUCCESS,
    GET_CHAMBRES_LOAD,
    DELETE_CHAMBRE,
    GET_CHAMBRE,
    EDIT_CHAMBRE,
  } from "../const/chambre";
  
  
  const initialeState = {
    chambre: [],
    loadchambre: false,
    errors: null,
    user: [],
    editchambre: "",
  };
  
  export const chambreReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
      case GET_CHAMBRES_LOAD:
        return { ...state, loadchambre: true };
      case GET_CHAMBRES_SUCCESS:
        return { ...state, chambre: payload, loadchambre: false };
      case GET_CHAMBRES_FAILED:
        return { ...state, loadchambre: false, errors: payload };
      case GET_CHAMBRE:
        return { ...state, user: payload };
      case   DELETE_CHAMBRE:
        return { ...state, user: payload };
      case EDIT_CHAMBRE:
        return { ...state, loadchambre: false, chambre: payload };
      default:
        return state;
    }
  };
  