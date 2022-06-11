import axios from "axios";
import {
    GET_CHAUFFEURES_FAILED,    
    GET_CHAUFFEURES_SUCCESS,
    GET_CHAUFFEURES_LOAD,
    GET_CHAUFFEURE,
    EDIT_CHAUFFEURE,
  } from "../const/chauffeure";
  
export const getAllChauffeure = () => async (dispatch) => {
  dispatch({ type: GET_CHAUFFEURES_LOAD });
  try {
    let result = await axios.get("path");
    dispatch({ type: GET_CHAUFFEURES_SUCCESS, payload: result.data.response });
  } catch (errors) {
    dispatch({ type:  GET_CHAUFFEURES_FAILED, payload: errors });
  }
};

export const deleteChauffeure = (id) => async (disaptch) => {
  axios
    .delete(`path/${id}`)
    .then((res) => disaptch(getAllChauffeure()))
    .then(() => alert("chauffeure supprimer avec succes"))
    .catch((err) => console.log(err));
};


export const postChauffeure = (user) => async (dispatch) => {
  axios
    .post("path", user)
    .then((res) => dispatch(getAllChauffeure()))
    .then(() => alert("chaffeure ajouter avec succes"))
    .catch((err) => alert(err));
};

export const getChauffeure = (id) => (dispatch) => {
  axios
    .get(`path/${id}`)
    .then((res) =>
      dispatch({ type:  GET_CHAUFFEURE, payload: res.data.response })
    )
    .catch((err) => console.log(err));
};

export const editChauffeure = (id, chauffeure) => (dispatch) => {
  axios
    .put(`path/${id}`, chauffeure)
    .then((res) => {
      alert("chauffeure modifier avec succes");
      dispatch({
        type: EDIT_CHAUFFEURE,
        payload: { ...res.data.user},
      });
    })
    .catch((err) => console.log(err));
};