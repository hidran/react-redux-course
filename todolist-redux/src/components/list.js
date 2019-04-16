import React from 'react';
import {Link} from 'react-router-dom';

export default function list({list, removeList}) {

    return (
        <li key={list.id}>
        <Link to ={
            {
               pathname :'/lists/' + list.id + '/todos',
               state: {
                   listName : list.name
               } 
            }
        }>
         {list.name}
         </Link>
            <span className="cross" onClick={(e) => {
                e.stopPropagation();
                removeList(list.id)
            }

            }></span>
        </li>
    );
}
