import React from 'react';

const Signup = () => {

    return(

    <form className="form login">
    <div className="form-group">
            <label htmlFor="username">Username</label>
            <input required  name="username" id="username" className ="form-field" />

        </div>
        <div className="form-group">
            <label  htmlFor="email">Email</label>
            <input required  name="email" id="email" className ="form-field" />

        </div>
        <div className="form-group">
        <label  htmlFor="password">Password</label>
        <input required name="password" id="password" type="password" className ="form-field" />
            </div>
            <div className="form-group buttons">
             <button className="btn btn-success">LOGIN</button>
             <button type="reset" className="btn btn-success">RESET</button>
            </div>
    </form>
 

    );
};

export default Signup;