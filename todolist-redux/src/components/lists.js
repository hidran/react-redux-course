import React from 'react';

import List from './list';
import Adlist from '../containers/addnewlist';
export default function lists({lists,addList, removeList}) {

    return (
        <div className="container">
            <h1>LISTS</h1>
            <Adlist/>
            <ul className="lists">
                {
                    lists.map( 
                        list => <List key={list.id} list= {list}
                         removeList= {removeList}/>
                          )   
                }
            </ul>
        </div>
       
    )
}