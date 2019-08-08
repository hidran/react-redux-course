import axios   from 'axios';
import {AUTH_URL} from '../config/config';

function Auth() {
    const isTokenExpired = () =>{
        const expires = +localStorage.getItem('token-expires');
        const res =  (new Date()) > expires;
        if(res){
            localStorage.removeItem('token-expires');
            localStorage.removeItem('auth')
        }
        return res;
    };
    const handleEror = (resp)=>{
        let message = '';
        switch (+resp.status) {
            case 401:
                message = resp.data.error;
                break;
            case 500:
                message = resp.data.message;
                break;
            default:
                message = 'Error contacting server';
        }
        return message;
    };
  const addAxiosToken = () =>{
     const token = getToken();

     if(token){

       axios.defaults
       .headers
       .common['Authorization'] = 'Bearer ' + token;
     }

  }


 const signin = async (email, password) => {
    try {
      const result = await axios.post( AUTH_URL + 'login',
        {
          email,
          password
        }
      );
        return manageResult(result);

    } catch( e ){
        console.log(e.response);
        return Promise.reject(handleEror(e.response)) ;
    }



 };
    const getToken = () =>{
        if(isTokenExpired()){
            return null;
        }
       const auth = JSON.parse(localStorage.getItem('auth'));
       if(auth){
           return auth.access_token;
       }
       return null;
    }

     const getUser = () =>{
         if(isTokenExpired()){
             return null;
         }
       const auth = JSON.parse(localStorage.getItem('auth'));
       if(auth){
           return auth.user;
       }
       return null;
    }


    function manageResult(result) {
        const data = result['data'];
        if (!data || !data['access_token']) {
            return Promise.reject('Invalid server response');
        }

        const expireDate = (new Date()).getTime() + data['expires_in'] * 1000;
        localStorage.setItem('token-expires', expireDate);
        localStorage.setItem('auth', JSON.stringify(result.data));

        return result.data;
    }

    const signup= async (email, name, password)=> {
        try {
            const result = await axios.post( AUTH_URL + 'signup',
                {
                    email,
                    name,
                    password
                }
            );
            return manageResult(result);

        } catch( e ){
            console.log(e.response);
            return Promise.reject(handleEror(e.response)) ;
        }

    };

     const logout = async () => {
         addAxiosToken();
         try {
         const result = await axios.post(AUTH_URL + 'logout');

            localStorage.removeItem('auth');
            return result;
         }
         catch (e){
             console.log(e.response);
             return Promise.reject(handleEror(e.response)) ;
         }

     };
     const refresh = () => {};

    return {
      getUser,
      signin ,
      signup,
      logout,
      refresh,
        isTokenExpired
    }

}
const  authMethods = Auth();
export default authMethods;
