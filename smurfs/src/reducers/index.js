import { SMURFS_ARE_COMING, SMURFS_HAVE_ARRIVED, SMURFS_ARE_LOST, NEW_SMURF_In_THE_VILLAGE } from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  smurfs: [{
    name: "",
    age: null,
    height: null,
    id: Date.now()
  }]
};

export const RootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SMURFS_ARE_COMING:
      return {
        ...state,
        isLoading: true
      }
    case SMURFS_ARE_LOST:
    return {
      ...state,
      isLoading: false,
      error: action.payload
    }
    case SMURFS_HAVE_ARRIVED:
    return {
      ...state,
      isLoading: false,
      smurfs: action.payload
    }
    case NEW_SMURF_In_THE_VILLAGE:
      return {
        ...state,
        smurfs: [action.payload, ...state.smurfs],
        isLoading: false
      }
    default:
      return state
  }
}