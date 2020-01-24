import { SMURFS_ARE_COMING, SMURFS_HAVE_ARRIVED, SMURFS_ARE_LOST, NEW_SMURF_In_THE_VILLAGE, BYE_BYE_SMURF } from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  smurfs: [{
    name: "",
    age: "",
    height: "",
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
        smurfs: action.payload, ...state.smurfs,
        isLoading: false
      }
    case BYE_BYE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => action.payload !== smurf.id),
        isLoading: false
      }
    default:
      return state
  }
}