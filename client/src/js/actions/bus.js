import axios from "axios";
import {
    GET_BUSS_FAILED,    
    GET_BUSS_SUCCESS,
    GET_BUSS_LOAD,
    GET_BUS,
    EDIT_BUS,
  } from "../const/bus";
  
export const getAllBus = () => async (dispatch) => {
  dispatch({ type: GET_BUSS_LOAD });
  try {
    let result = await axios.get("path");
    dispatch({ type: GET_BUSS_SUCCESS, payload: result.data.response });
  } catch (errors) {
    dispatch({ type:  GET_BUSS_FAILED, payload: errors });
  }
};

export const deleteBus = (id) => async (disaptch) => {
  axios
    .delete(`path/${id}`)
    .then((res) => disaptch(getAllBus()))
    .then(() => alert("bus supprimer avec succes"))
    .catch((err) => console.log(err));
};


export const postBus = (user) => async (dispatch) => {
  axios
    .post("path", user)
    .then((res) => dispatch(getAllBus()))
    .then(() => alert("bus ajouter avec succes"))
    .catch((err) => alert(err));
};

export const getBus = (id) => (dispatch) => {
  axios
    .get(`path/${id}`)
    .then((res) =>
      dispatch({ type:  GET_BUS, payload: res.data.response })
    )
    .catch((err) => console.log(err));
};

export const editBus = (id, bus) => (dispatch) => {
  axios
    .put(`path/${id}`, bus)
    .then((res) => {
      alert("bus modifier avec succes");
      dispatch({
        type: EDIT_BUS,
        payload: { ...res.data.user},
      });
    })
    .catch((err) => console.log(err));
};