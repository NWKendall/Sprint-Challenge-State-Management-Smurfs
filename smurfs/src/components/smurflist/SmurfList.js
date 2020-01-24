import React from 'react'
import { connect } from "react-redux"
import { whereAreTheSmurfs } from "../../actions"

import SmurfCard from "../smurfcard/SmurfCard"
import { GridDiv, Button } from "./SmurfList.styled";

const SmurfList = props => {
  console.log(`this is from SmurfList`, props)
  return (
    <div>
      <Button onClick={props.whereAreTheSmurfs}>Smurf Village Members</Button>
      <GridDiv>
      {!props.smurfs && !props.isLoading && (
        <h2>Where could they be...</h2>
      )}
      {props.isLoading && (
        <h2>There are here somewhere...</h2>
      )}
      {props.smurfs && !props.isLoading && props.smurfs.map(smurf => (
        <SmurfCard key={smurf.id} smurf={smurf} />
      ))}
     </GridDiv>
    </div>
  )
}

const mapStateToProps = state => {  
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurfs: state.smurfs
  }
}


export default connect (
  mapStateToProps, 
  {whereAreTheSmurfs}
  )(SmurfList)