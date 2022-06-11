import {
    GET_HOTELS_FAILED,    
    GET_HOTELS_SUCCESS,
    GET_HOTELS_LOAD,
    DELETE_HOTEL,
    GET_HOTEL,
    EDIT_HOTEL,
  } from "../const/hotel";

  const initialeState = {
    hotel: [],
    loadhotel: false,
    errors: null,
    user: [],
    edithotel: "",
  };
  
  export const hotelReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
      case GET_HOTELS_LOAD:
        return { ...state, loadhotel: true };
      case GET_HOTELS_SUCCESS:
        return { ...state, hotel: payload, loadhotel: false };
      case GET_HOTELS_FAILED:
        return { ...state, loadhotel: false, errors: payload };
      case GET_HOTEL:
        return { ...state, user: payload };
      case  DELETE_HOTEL:
        return { ...state, user: payload };
      case EDIT_HOTEL:
        return { ...state, loadhotel: false, hotel: payload };
      default:
        return state;
    }
  };
  