import React, {useState} from 'react' ;
import axios from 'axios';
import {LOGIN_URL}  from '../config/config';
const Login = () => {
    const [userName, setUsername] =  useState('');
    const [password, setPassword] =  useState('');
    const [errors, setErrors] =  useState({userName:'',password: ''});
const submitForm = (e) =>{
    e.preventDefault();
   
   if(userName.length<6){
       setErrors({...errors,userName:'Min length is 6'})
   }
   axios.post(LOGIN_URL,
    {
        email: userName,
        password
    }
    ).then(data =>{
     if(data.error){
         alert(data.error)
             return;
         localStorage.setItem('token',data.access_token);
         
     }
    }).catch(e => console.log(e))
}
const setValue =({target})=>{
    const funcName =eval('set' + target.name.substring(0,1).toUpperCase() +target.name.substring(1));

    funcName(target.value)
    
}
    return(
        <div className="login">
        <form onSubmit = {submitForm}>
        <div className="form-group">
        <label htmlFor="userName" />
        <input name="username" className={errors.userName && 'invalid'}
          onChange ={setValue}
          id="username"  value={userName}
            required/>
            {errors.userName && <p>{errors.userName}</p>}
        </div>
           
        <div className="form-group">
        <label htmlFor="password" />
        <input name="password" 
         onChange ={setValue}
         id="password" value={password} 
         required/>
         {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-group">
        <button className="btn btn-success">SUBMIT</button>
        </div>
            </form>
        </div>
    );
}
export default  Login ;