import React from 'react'
import { connect } from "react-redux"
import { whereAreTheSmurfs } from "../actions"

import SmurfCard from "./SmurfCard"

const SmurfList = props => {

  return (
    <div>
      <button onClick={props.whereAreTheSmurfs}>?</button>
      {!props.smurfs && !props.isLoading && (
        <h2>Where could they be...</h2>
      )}
      {props.isLoading && (
        <h2>There are here somewhere...</h2>
      )}
      {props.smurfs && !props.isLoading && props.smurfs.map(smurf => (
        <SmurfCard key={smurf.id} smurf={smurf}/>
      ))}
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