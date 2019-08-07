import axios   from 'axios';
import {AUTH_URL} from '../config/config';

function Auth() {
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

      localStorage.setItem('auth', JSON.stringify(result.data));

      return result.data;

    } catch( e ){
        console.log(e.response);
        return Promise.reject(handleEror(e.response)) ;
    }



 };
    const getToken = () =>{
       const auth = JSON.parse(localStorage.getItem('auth'));
       if(auth){
           return auth.access_token;
       }
       return null;
    }

     const getUser = () =>{
       const auth = JSON.parse(localStorage.getItem('auth'));
       if(auth){
           return auth.user;
       }
       return null;
    }


    const signup=()=> {};
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
      refresh

    }

}
const  authMethods = Auth();
export default authMethods;
