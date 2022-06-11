import axios from "axios";

import {
  LOAD_USER,
  LOGIN_USER,
  FAIL_USER,
  LOGOUT_USER,
  CURRENT_USER,
  GET_USERS_LOAD,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  EDIT_USER,
  GET_USER,
} from "../const/user";

export const loginUser = (user) => async (dispatch) => {
  console.log(user)
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("http://127.0.0.1:5000/user/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
  } catch (error) {
  
 
      alert(error);
    }
  
};

export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("http://localhost:6500/current", options);
    dispatch({ type: CURRENT_USER, payload: result.data.user });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
    console.log(error);
  }
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS_LOAD });
  try {
    let result = await axios.get("http://localhost:6500/admin/user");
    dispatch({ type: GET_USERS_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_USERS_FAILED, payload: error });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  axios
    .delete(`http://localhost:6500/admin/${id}`)
    .then((res) => dispatch(getAllUsers()))
    .then(() => alert("User supprimer avec succes"))
    .catch((err) => console.log(err));
};

export const getUser = (id) => (dispatch) => {
  axios
    .get(`http://localhost:6500/user/profil/${id}`)
    .then((res) => dispatch({ type: GET_USER, payload: res.data.response }))
    .catch((err) => console.log(err));
};

export const editUser = (id, users) => (dispatch) => {
  let formData = new FormData();
  formData.append("receipt", users.receipt);
  formData.append("nom", users.nom);
  formData.append("adresse", users.adresse);
  formData.append("prenom", users.prenom);
  formData.append("num_tel", users.num_tel);
  formData.append("niveau_scolaire", users.niveau_scolaire);
  
  axios
    .put(`http://localhost:6500/profil/${id.id}`, formData)
    .then((res) => {
      alert("user modifier avec succes");
      dispatch({ type: EDIT_USER, payload: { ...res.data.users } });
    })
    .catch((err) => console.log(err));
};
