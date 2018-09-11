import React from 'react';


class Clock extends React.Component {

    constructor(props) {
        super(props);
    }

   render(){
    const tempo =   Date.now() + this.props.timezone  * 3600 * 1000 ;
    const data = new Date(tempo);

    return <h2> In { this.props.country }  is  { data.toLocaleDateString()  + ' ' 
    + data.toLocaleTimeString() }</h2>
   }
}

export default Clock;