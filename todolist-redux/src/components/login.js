import React, {useState,useEffect} from 'react';

const Login = () => {
         const [email, setEmail] = useState('');
         const [password, setpassword] = useState('');

         const loginUser = (e) =>{
             alert(email +' ' + password)
             e.preventDefault();
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