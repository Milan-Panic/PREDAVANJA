import React from 'react'
class Forma extends React.Component{
  render(){
    return(
      <div className="forma">
        <input type="text" placeholder="Unesite ime"/><br/>
        <input type="text" placeholder="Unesite prezime"/>
      </div>
    )
  }
}
export default Forma;