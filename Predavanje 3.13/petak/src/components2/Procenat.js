import React from 'react'
const Procenat = ({left, right}) => {
  let procenat = (left / (left + right)) * 100
  if(!isNaN(procenat)){
  return(    
    <>
    <p>Procenat: {procenat}</p>
    </>    
  )}
  else{
    return(
      <>
      <p>Nema ocene</p>
      </>
    )
  }
}
export default Procenat