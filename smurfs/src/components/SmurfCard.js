import React from 'react'

const SmurfCard = ({smurf}) => {
  
  const { name, age, height} = smurf;

  return (  

    <div>
      <h3>name: {name}</h3>
      <h4>age: {age}</h4>
      <h4>height: {height}</h4>
    </div>
  )
}

export default SmurfCard