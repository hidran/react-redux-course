import React, { Component } from 'react';
import './App.css';
import Clock from  './Clock'

const clocks = [
  {
    secs: 1,
    country : 'Italy',
    timezone: 0
  },
  {
    secs: 1,
    country : 'Russia',
    timezone: 2
  },
  {
    secs: 1,
    country : 'Cuba',
    timezone: -6
  }
]

class App extends Component {
   
   getClocks() {
    return   clocks.map( ({secs, country, timezone}) => { 

     return <Clock key = {country} secs={secs} 
                   country={country}
                  timezone={ timezone}
            /> 
    
    }

       );
   }

  render() {
    return (
      <React.Fragment>
      <div className="App">
       <h1> My first React App</h1>
      </div>
     <ul>
      { this.getClocks() }
      </ul>
      </React.Fragment>
    );
  }
}

export default App;
