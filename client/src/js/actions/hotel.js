import axios from "axios";
import {
    GET_HOTELS_FAILED,    
    GET_HOTELS_SUCCESS,
    GET_HOTELS_LOAD,
    GET_HOTEL,
    EDIT_HOTEL,
  } from "../const/hotel";
  
export const getAllHotel = () => async (dispatch) => {
  dispatch({ type: GET_HOTELS_LOAD });
  try {
    let result = await axios.get("path");
    dispatch({ type: GET_HOTELS_SUCCESS, payload: result.data.response });
  } catch (errors) {
    dispatch({ type:  GET_HOTELS_FAILED, payload: errors });
  }
};

export const deleteHotel = (id) => async (disaptch) => {
  axios
    .delete(`path/${id}`)
    .then((res) => disaptch(getAllHotel()))
    .then(() => alert("bus supprimer avec succes"))
    .catch((err) => console.log(err));
};


export const postHotel = (user) => async (dispatch) => {
  axios
    .post("path", user)
    .then((res) => dispatch(getAllHotel()))
    .then(() => alert("hotel ajouter avec succes"))
    .catch((err) => alert(err));
};

export const getHotel = (id) => (dispatch) => {
  axios
    .get(`path/${id}`)
    .then((res) =>
      dispatch({ type:  GET_HOTEL, payload: res.data.response })
    )
    .catch((err) => console.log(err));
};

export const editHotel = (id, hotel) => (dispatch) => {
  axios
    .put(`path/${id}`, hotel)
    .then((res) => {
      alert("hotel modifier avec succes");
      dispatch({
        type: EDIT_HOTEL,
        payload: { ...res.data.user},
      });
    })
    .catch((err) => console.log(err));
};