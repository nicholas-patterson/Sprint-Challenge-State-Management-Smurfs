import axios from "axios";

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: "FETCH_SMURF_START" });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: "FETCH_SMURF_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_SMURF_FAILURE", payload: err.response });
      });
  };
};

export const addSmurf = newSmurf => {
  return dispatch => {
    dispatch({ type: "ADD_SMURF_START" });
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        dispatch({ type: "ADD_SMURF_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "ADD_SMURF_FAILURE", payload: err.data });
      });
  };
};

export const deleteSmurf = smurf => {
  return dispatch => {
    dispatch({ type: "EDIT_SMURF_START" });
    axios
      .delete(`http://localhost:3333/smurfs/${smurf}`)
      .then(res => {
        dispatch({ type: "DELETE_SMURF_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "DELETE_SMURF_FAILURE", payload: err.response });
      });
  };
};

export const editSmurf = smurf => {
  return dispatch => {
    dispatch({ type: "EDIT_SMURF_START" });
    axios
      .put(`http://localhost:3333/smurfs/${smurf}`)
      .then(res => {
        dispatch({ type: "EDIT_SMURF_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "EDIT_SMURF_FAILURE", payload: err.response });
      });
  };
};
