import axios from "axios";
import {
  GET_VOLS_FAILED,
  GET_VOLS_SUCCESS,
  GET_VOLS_LOAD,
  GET_VOL,
  EDIT_VOL,
} from "../const/vol";

export const getAllVol = () => async (dispatch) => {
  dispatch({ type: GET_VOLS_LOAD });
  try {
    let result = await axios.get("path");
    dispatch({ type: GET_VOLS_SUCCESS, payload: result.data.response });
  } catch (errors) {
    dispatch({ type: GET_VOLS_FAILED, payload: errors });
  }
};

export const deleteVol = (id) => async (disaptch) => {
  axios
    .delete(`path/${id}`)
    .then((res) => disaptch(getAllVol()))
    .then(() => alert("vol supprimer avec succes"))
    .catch((err) => console.log(err));
};

export const postVol = (user) => async (dispatch) => {
  axios
    .post("path", user)
    .then((res) => dispatch(getAllVol()))
    .then(() => alert("vol ajouter avec succes"))
    .catch((err) => alert(err));
};

export const getVol = (id) => (dispatch) => {
  axios
    .get(`path/${id}`)
    .then((res) => dispatch({ type: GET_VOL, payload: res.data.response }))
    .catch((err) => console.log(err));
};

export const editVol = (id, vol) => (dispatch) => {
  axios
    .put(`path/${id}`, vol)
    .then((res) => {
      alert("vol modifier avec succes");
      dispatch({
        type: EDIT_VOL,
        payload: { ...res.data.user },
      });
    })
    .catch((err) => console.log(err));
};
