import React from 'react';
import Auth from '../auth/auth';

const userData = Auth.getUser();
const UserDataContext = React.createContext(userData);

const UserDataProvider = (props) => {

    const [user, setUser] = React.useState(userData);

return (
 <UserDataContext.Provider value ={[user, setUser]}>
  {  props.children}
 </UserDataContext.Provider>
);
}

export {UserDataContext,UserDataProvider };
