import React from 'react';
import Auth from '../auth/auth';


export default function logout(props){
   
    React.useEffect(()=>{

       Auth.logout().then(()=>{
          props.history.push('/login');
       });

    },[]);
  return null;
}