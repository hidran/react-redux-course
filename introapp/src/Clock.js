import React from 'react'

function clock(props){
    
    const tempo =   Date.now() + props.timezone  * 3600 * 1000 ;
    const data = new Date(tempo);

    return <h2> In { props.country }  is  { data.toLocaleDateString()  + ' ' + data.toLocaleTimeString() }</h2>
}

export default clock;