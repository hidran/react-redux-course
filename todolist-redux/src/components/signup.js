import React from 'react';
import Login from './login';

const Signup = (props) => {

    return(
         <Login {...props} signup={true} />

    );
};

export default Signup;
