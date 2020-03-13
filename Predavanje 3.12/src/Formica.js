// import React from 'react'
// const Formica = () => {
//   return(
//   <>
//   <input type="text" placeholder="Unesite Ime"/>
//   <input type="number" placeholder="Unesite datum rodjenja"/>
//   </>
//   )
// }
// export default Formica
import React from 'react'
class Forma extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="forma">
        <input type="button" value={this.props.valu}/>
      </div>
    )
  }
}
export default Forma;