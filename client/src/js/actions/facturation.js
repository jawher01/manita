import axios from "axios";
import {
    GET_FACTURATIONS_FAILED,    
    GET_FACTURATIONS_SUCCESS,
    GET_FACTURATIONS_LOAD,
    GET_FACTURATION,
    EDIT_FACTURATION,
  } from "../const/facturation";

  
export const getAllFacturation = () => async (dispatch) => {
  dispatch({ type: GET_FACTURATIONS_LOAD });
  try {
    let result = await axios.get("path");
    dispatch({ type: GET_FACTURATIONS_SUCCESS, payload: result.data.response });
  } catch (errors) {
    dispatch({ type:  GET_FACTURATIONS_FAILED, payload: errors });
  }
};

export const deleteFacturation = (id) => async (disaptch) => {
  axios
    .delete(`path/${id}`)
    .then((res) => disaptch(getAllFacturation()))
    .then(() => alert("facturation supprimer avec succes"))
    .catch((err) => console.log(err));
};


export const postFacturation = (user) => async (dispatch) => {
  axios
    .post("path", user)
    .then((res) => dispatch(getAllFacturation()))
    .then(() => alert("facturation ajouter avec succes"))
    .catch((err) => alert(err));
};

export const getFacturation = (id) => (dispatch) => {
  axios
    .get(`path/${id}`)
    .then((res) =>
      dispatch({ type: GET_FACTURATION, payload: res.data.response })
    )
    .catch((err) => console.log(err));
};

export const editFacturationt = (id, facturation) => (dispatch) => {
  axios
    .put(`path/${id}`, facturation)
    .then((res) => {
      alert("facturation modifier avec succes");
      dispatch({
        type:  EDIT_FACTURATION,
        payload: { ...res.data.user},
      });
    })
    .catch((err) => console.log(err));
};