import React from 'react'
const Prikaz = ({left, setLeft}) => {
  return(
    <>
    <button onClick={()=> setLeft(left + 1)}>LEFT</button>
    <p>{left}</p>
    </>
  )
}
export default Prikaz