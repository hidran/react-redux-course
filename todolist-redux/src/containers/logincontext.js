import React from 'react';
import Auth from '../auth/auth';

const user = Auth.getUser();
const UserDataContext = React.createContext(user);

const UserDataProvider = (props) => {

    const [user, setUser] = React.useState(user);
return (
 <UserDataContext.Provider value ={[user, setUser]}>
  {  props.children}
 </UserDataContext.Provider>
);
}

export {UserDataContext,UserDataProvider };