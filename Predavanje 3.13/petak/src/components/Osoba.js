import React from 'react'
class Osoba extends React.Component{
  constructor(props){
    super(props) 
  }
  render(){
    return(
      <><p>
      {this.props.ime} {this.props.alkohol}
    </p></>
    )
  }
}
export default Osoba