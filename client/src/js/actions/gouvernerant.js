import axios from "axios";
import {
    GET_GOUVERNERANTS_FAILED,    
    GET_GOUVERNERANTS_SUCCESS,
    GET_GOUVERNERANTS_LOAD,
    GET_GOUVERNERANT,
    EDIT_GOUVERNERANT,
  } from "../const/gouvernerant";
  
export const getAllGouvernerant = () => async (dispatch) => {
  dispatch({ type:  GET_GOUVERNERANTS_LOAD });
  try {
    let result = await axios.get("path");
    dispatch({ type: GET_GOUVERNERANTS_SUCCESS, payload: result.data.response });
  } catch (errors) {
    dispatch({ type:  GET_GOUVERNERANTS_FAILED, payload: errors });
  }
};

export const deleteGouvernerant = (id) => async (disaptch) => {
  axios
    .delete(`path/${id}`)
    .then((res) => disaptch(getAllGouvernerant()))
    .then(() => alert("Gouvernerant supprimer avec succes"))
    .catch((err) => console.log(err));
};


export const postGouvernerant = (user) => async (dispatch) => {
  axios
    .post("path", user)
    .then((res) => dispatch(getAllGouvernerant()))
    .then(() => alert("Gouvernerant ajouter avec succes"))
    .catch((err) => alert(err));
};

export const getGouvernerant = (id) => (dispatch) => {
  axios
    .get(`path/${id}`)
    .then((res) =>
      dispatch({ type: GET_GOUVERNERANT, payload: res.data.response })
    )
    .catch((err) => console.log(err));
};

export const editGouvernerant = (id, Gouvernerant) => (dispatch) => {
  axios
    .put(`path/${id}`, Gouvernerant)
    .then((res) => {
      alert("Gouvernerant modifier avec succes");
      dispatch({
        type:  EDIT_GOUVERNERANT,
        payload: { ...res.data.user},
      });
    })
    .catch((err) => console.log(err));
};