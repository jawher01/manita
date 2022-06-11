import axios from "axios";
import {
  GET_CIRCUITS_FAILED,
  GET_CIRCUITS_SUCCESS,
  GET_CIRCUITS_LOAD,
  GET_CIRCUIT,
  EDIT_CIRCUIT,
} from "../const/circuit";

export const getAllCircuit = () => async (dispatch) => {
  dispatch({ type: GET_CIRCUITS_LOAD});
  try {
    let result = await axios.get("path");
    dispatch({ type:GET_CIRCUITS_SUCCESS, payload: result.data.response });
  } catch (errors) {
    dispatch({ type: GET_CIRCUITS_FAILED, payload: errors });
  }
};

export const deleteCircuit = (id) => async (disaptch) => {
  axios
    .delete(`path/${id}`)
    .then((res) => disaptch(getAllCircuit()))
    .then(() => alert("circuit supprimer avec succes"))
    .catch((err) => console.log(err));
};

export const postCircuit = (user) => async (dispatch) => {
  axios
    .post("path", user)
    .then((res) => dispatch(getAllCircuit()))
    .then(() => alert("circuit ajouter avec succes"))
    .catch((err) => alert(err));
};

export const getCircuit = (id) => (dispatch) => {
  axios
    .get(`path/${id}`)
    .then((res) => dispatch({ type:GET_CIRCUIT, payload: res.data.response }))
    .catch((err) => console.log(err));
};

export const editCircuit = (id, circuit) => (dispatch) => {
  axios
    .put(`path/${id}`, circuit)
    .then((res) => {
      alert("circuit modifier avec succes");
      dispatch({
        type: EDIT_CIRCUIT,
        payload: { ...res.data.user },
      });
    })
    .catch((err) => console.log(err));
};
