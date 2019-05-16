
import React from 'react';
import FooterLink from './filterlink';
 import { NavLink} from 'react-router-dom';


export default function todoFooter ({match,filter, activeFilter, filterTodo}){
   const todoUrl = match.url;

   const all = filter === 'ALL' ? <li className="active">{filter}</li> :

   <li><NavLink to = {todoUrl +'?filter=ALL'}>ALL</NavLink></li>

   const todo = filter === 'TODO' ? <li className="active">{filter}</li> :
   <li><NavLink to = {todoUrl +'?filter=TODO'}>TODO</NavLink></li>

   const completed = filter === 'COMPLETED' ? <li className="active">{filter}</li> :
   <li><NavLink to = {todoUrl +'?filter=COMPLETED'}>COMPLETED</NavLink></li>
 
   return (
    <div className="footer">
    <ul className="menu footer">
     
       { all}
     
      
        {todo}
     
     {completed} 
     
    </ul>
          
         
</div>
 );
}

