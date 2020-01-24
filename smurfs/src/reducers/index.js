import { SMURFS_ARE_COMING, SMURFS_HAVE_ARRIVED, SMURFS_ARE_LOST } from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  smurfs: []
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
    default:
      return state
  }
}