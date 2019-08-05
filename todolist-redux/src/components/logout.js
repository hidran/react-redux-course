import React from 'react';
import Auth from '../auth/auth';
import {LoginContext} from '../containers/logincontext'

export default function logout(props){
    const [user,setUser] =  React.useContext(LoginContext);
    React.useEffect(()=>{

       Auth.logout().then(()=>{
           setUser(null)
        props.history.push('/login');
       });

    },[]);
  return null;
}