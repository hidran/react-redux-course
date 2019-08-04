import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from '../auth/auth';
export default function privateRoute(props){
   
   return Auth.getUser() ? <Route {...props} />:<Redirect 
        to ={
            {pathname:'/login', state:{from:props.location.pathname} }
            }/>

}
  