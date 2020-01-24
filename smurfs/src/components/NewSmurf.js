import React, { useState } from 'react'
import axios from "axios"
import { newSmurf } from "../actions"

const NewSmurf = () => {

  const [name, setName] = useState("")
  const [age, setAge] = useState() 
  const [height, setHeight] = useState()
  

  return (
    <form onSubmit={ e => { 
      e.preventDefault();
      axios.post("http://localhost:3333/smurfs", {name, age, height})}}>
      
      <input 
        type="text"
        placeholder="what's their name?"
        onChange={e => setName(e.target.value)}
      />
      <input 
        type="number"
        placeholder="how many years old?" 
        onChange={e => setAge(e.target.value)}

      />
      <input 
        type="number"
        placeholder="how tall?" 
        onChange={e => setHeight(e.target.value)}

      />
      <button type="submit">Join the village!</button>
      
    </form>
  )
}

export default NewSmurf

