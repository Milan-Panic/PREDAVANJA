import React from 'react'
import Osoba from './Osoba'

class Content extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
  let a = this.props.x.map(osoba => <Osoba ime={osoba.ime} kolicina={osoba.alkohol}></Osoba>)

    return(
      <>
      {a}    
    </>
    )
  }
}
export default Content