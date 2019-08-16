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
