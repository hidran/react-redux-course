import React, {useState} from 'react';
import axios from 'axios';
import {LARAVEL_API} from  '../config/config';
import  Auth from '../auth/auth';

const Login = (pars) => {
    
         const [email, setEmail] = useState('');
         const [password, setpassword] = useState('');

         const loginUser = (e) =>{
           
             e.preventDefault();

             Auth.signin(email, password)
             .then( payload => {
              
                pars.history.push('/');
               
             });
            
          
         }
         const resetForm = () =>{
            setEmail('');
            setpassword('');
         }
    return(

    <form className="form login" onSubmit = { loginUser}>
        <div className="form-group">
            <label  htmlFor="email">Email</label>
            <input
             required 
             name="email" 
            id="email" value={email} 
            className ="form-field" 
                onChange = {(e) => setEmail(e.target.value)}
            />

        </div>
        <div className="form-group">
        <label  htmlFor="password">Password</label>
        <input 
        required 
        name="password" id="password"
         value= {password} 
         type="password" 
         className ="form-field"
         onChange = {(e) => setpassword(e.target.value)}
          />
            </div>
            <div className="form-group buttons">
             <button className="btn btn-success">LOGIN</button>
             <button
              type="reset" 
              onClick = {resetForm}
             className="btn btn-success">RESET</button>
            </div>
    </form>
 

    );
};

export default Login;