import axios from "axios";

export const SMURFS_ARE_COMING = "SMURFS_ARE_COMING";
export const SMURFS_HAVE_ARRIVED = "SMURFS_HAVE_ARRIVED";
export const SMURFS_ARE_LOST = "SMURFS_ARE_LOST";
export const NEW_SMURF_In_THE_VILLAGE = "NEW_SMURF_In_THE_VILLAGE";
export const BYE_BYE_SMURF = "BYE_BYE_SMURF";

export const whereAreTheSmurfs = () => dispatch => {
  dispatch({ type: SMURFS_ARE_COMING });  
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {      
      console.log(`this is from actions`, res)
      dispatch({ type: SMURFS_HAVE_ARRIVED, payload: res.data });
    })
    .catch(err => {
      console.log(`this is an error from actions`, err)
      dispatch({ type: SMURFS_ARE_LOST, payload: err});
    })
}

export const newSmurf = smurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: NEW_SMURF_In_THE_VILLAGE, payload: res.data.smurf })
    })    
}

export const byeSmurf = id => dispatch => {
  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(`asdsd`, res)
      dispatch({ type: BYE_BYE_SMURF, payload: res.data })
    })
} 