import axios from "axios";
import {
    GET_CHAMBRES_FAILED,    
    GET_CHAMBRES_SUCCESS,
    GET_CHAMBRES_LOAD,
    GET_CHAMBRE,
    EDIT_CHAMBRE,
  } from "../const/chambre";
  
  
export const getAllChambre = () => async (dispatch) => {
  dispatch({ type:  GET_CHAMBRES_LOAD });
  try {
    let result = await axios.get("path");
    dispatch({ type: GET_CHAMBRES_SUCCESS, payload: result.data.response });
  } catch (errors) {
    dispatch({ type:  GET_CHAMBRES_FAILED, payload: errors });
  }
};

export const deleteChambre = (id) => async (disaptch) => {
  axios
    .delete(`path/${id}`)
    .then((res) => disaptch(getAllChambre()))
    .then(() => alert("chambre supprimer avec succes"))
    .catch((err) => console.log(err));
};


export const postChambre = (user) => async (dispatch) => {
  axios
    .post("path", user)
    .then((res) => dispatch(getAllChambre()))
    .then(() => alert("chambre ajouter avec succes"))
    .catch((err) => alert(err));
};

export const getChambre = (id) => (dispatch) => {
  axios
    .get(`path/${id}`)
    .then((res) =>
      dispatch({ type:  GET_CHAMBRE, payload: res.data.response })
    )
    .catch((err) => console.log(err));
};

export const editChambre = (id, chambre) => (dispatch) => {
  axios
    .put(`path/${id}`, chambre)
    .then((res) => {
      alert("chambre modifier avec succes");
      dispatch({
        type: EDIT_CHAMBRE,
        payload: { ...res.data.user},
      });
    })
    .catch((err) => console.log(err));
};