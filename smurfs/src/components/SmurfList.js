import React, { useEffect } from 'react'
import axios from "axios"
import { connect } from "react-redux"

import SmurfCard from "./SmurfCard"

const SmurfList = props => {

  useEffect(() => {
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(`this is from useEffect`, res)
    })
    .catch(err => {
      console.log(`this is an error from useEffect`, err)
    })
  }, [])


  return (
    <div>
      <SmurfCard />      
    </div>
  )
}

const mapStateToProps = state => {
  
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurfs: [...state.smurfs]
  }
}


export default connect (mapStateToProps, {})(SmurfList)