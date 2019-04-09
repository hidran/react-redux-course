import React, { Component } from 'react';


export default function list({list, removeList}) {

    return (
        <li key={list.id}> {list.name}
            <span className="cross" onClick={(e) => {
                e.stopPropagation();
                removeList(list.id)
            }

            }></span>
        </li>
    );
}
