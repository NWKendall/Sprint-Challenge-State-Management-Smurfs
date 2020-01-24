import React, { useState } from 'react'
import axios from "axios"
import { connect } from "react-redux";
import { newSmurf } from "../../actions"

const NewSmurf = props => {

  const [smurfForm, setSmurfForm] = useState({
    name: "",
    age: "",
    height: ""
  })

  const handleChanges = e => {
    setSmurfForm({
      ...smurfForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={() => props.newSmurf(smurfForm)}>
      
      <input 
        type="text"
        name="name"
        placeholder="what's their name?"
        onChange={handleChanges}
      />
      <input 
        type="text"
        name="age"
        placeholder="how many years old?" 
        onChange={handleChanges}
      />
      <input 
        type="text"
        name="height"
        placeholder="how tall?" 
        onChange={handleChanges}
      />
      <button type="submit">Join the village!</button>     
    </form>
  )
}

export default connect(null, {newSmurf}) (NewSmurf)

