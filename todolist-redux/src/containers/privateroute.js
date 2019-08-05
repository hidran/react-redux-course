import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {UserDataContext} from '../containers/logincontext';

export default function privateRoute(props){
    const [user]= React.useContext(UserDataContext);
   return user ? <Route {...props} />:<Redirect 
        to ={
            {pathname:'/login', state:{from:props.location.pathname} }
            }/>

}
  