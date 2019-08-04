import React from 'react';
import { NavLink} from 'react-router-dom';
import Auth from '../auth/auth';

export default function header(){
    const user = Auth.getUser();
return (
    <header className="App-header">
 
        <nav>
        
            <ul className="menu">
            {
               user?
               <>
                <li>
                <NavLink exact activeStyle ={{backgroundColor:'red'}} to="/">MY TODO LISTS</NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/lists">LISTS</NavLink>
                </li>
                <li>
                <NavLink  activeClassName="active" to="/todos">ALL TODOS</NavLink>
                </li>
                </>
                : null
            }
                {
                    user ? <li> Welcome {user.name}
                            <NavLink to="/logout">LOGOUT</NavLink>
                            </li>:(
                        <>
                            <li>
                            <NavLink  activeClassName="active" to="/signup">SIGNUP</NavLink>
                            </li>
                            <li>
                            <NavLink  activeClassName="active" to="/login">LOGIN</NavLink>
                            </li>
                        </>
                    )
                }
            </ul>
        </nav>

     </header>
)
}
