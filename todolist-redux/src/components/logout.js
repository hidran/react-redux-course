import React from 'react';
import Auth from '../auth/auth';
import {UserDataContext} from '../containers/logincontext';

export default function logout(props){
    
     const [,setUser] = React.useContext(UserDataContext);
    
    React.useEffect(()=>{

       Auth.logout().then(()=>{
        setUser(null);
          props.history.push('/login');
       });

    },[]);
  return null;
}