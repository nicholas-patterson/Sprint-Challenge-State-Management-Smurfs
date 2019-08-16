const initialState = {
  smurfs: [],
  isLoading: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SMURF_START":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_SMURF_SUCCESS":
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    case "FETCH_SMURF_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case "ADD_SMURF_START":
      return {
        ...state,
        isLoading: true
      };

    case "ADD_SMURF_SUCCESS":
      return {
        ...state,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
