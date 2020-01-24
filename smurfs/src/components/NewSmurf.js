import React, { useState } from 'react'
import axios from "axios"
import { newSmurf } from "../actions"

const NewSmurf = () => {

  const [smurfForm, setSmurfForm] = useState({
    name: "",
    age: null,
    height: null
  })

  const handleChanges = e => {
    setSmurfForm({
      ...smurfForm,
      [e.target.name]: e.target.value
    })
  }
  
  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", smurfForm)
  }

  return (
    <form onSubmit={onSubmit}>
      
      <input 
        type="text"
        name="name"
        placeholder="what's their name?"
        onChange={handleChanges}
      />
      <input 
        type="number"
        name="age"
        placeholder="how many years old?" 
        onChange={handleChanges}

      />
      <input 
        type="number"
        name="height"
        placeholder="how tall?" 
        onChange={handleChanges}

      />
      <button type="submit">Join the village!</button>
      
    </form>
  )
}

export default NewSmurf

