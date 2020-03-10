import  React from 'react';
import LoginForm from './LoginForm';
import Kvadrat from './Kvadrat';

const Holder = () =>{
  return(
    <div>
    <LoginForm text1='A' text2='B'></LoginForm>
    <Kvadrat></Kvadrat>
    </div>
  )
}
export default Holder;