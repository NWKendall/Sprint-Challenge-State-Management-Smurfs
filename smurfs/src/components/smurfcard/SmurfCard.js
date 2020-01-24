import React from 'react'
import { CardDiv } from "./SmurfCard.styled"
import { connect } from "react-redux";
import { byeSmurf } from "../../actions"

const SmurfCard = ({smurf}) => {  
  console.log(`this is from smurfcard`, smurf)
  const { name, age, height, id} = smurf;
  return ( 
    <CardDiv>
      <h3>{name}</h3>
      <h4>{age}</h4>
      <h4>{height}</h4>
      <button onClick={() => byeSmurf(id)}>X</button>
    </CardDiv>
  )
}

export default connect (null, 
  {byeSmurf}
  )(SmurfCard)