import axios from "axios";

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: "FETCH_SMURF_START" });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
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
        console.log("RESPONSE FROM POST", res);
        dispatch({ type: "ADD_SMURF_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "ADD_SMURF_FAILURE", payload: err.data });
      });
  };
};
