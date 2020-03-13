import React from 'react'
class Footer extends React.Component{
  constructor(props){
    super(props)
  }
  suma(){
    let sum = 0;
    console.log(this.props.x);
    
    this.props.x.forEach(osoba =>  sum += osoba.alkohol)
    return sum;
  }
  render(){
    
    // return(
    // <><p>Ukupno pica: {this.props.p.alkohol1 + this.props.p.alkohol2 + this.props.p.alkohol3}</p></>
    // )

    return(
      <>
      <p>Ukupna suma: {this.suma()}</p>    
    </>
    )
  }
}
export default Footer