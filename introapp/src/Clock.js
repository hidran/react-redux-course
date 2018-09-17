import React from 'react';


class Clock extends React.Component {

    constructor(props) {
        super(props);
        const obj = {}
      //  this.toggleWatch =  this.toggleWatch.bind(this)
       /* this.state = {
            date: new Date(),
            timezone : 1
        };
        */
        this.state = {
            timestamp : Date.now(),
            date: new Date(),
            timezone : 1,
            stopped : false
        };
        
    }

   render(){
     const d = new Date(this.state.timestamp);
    const tempo =  d.getTime()  + this.props.timezone  * 3600 * 1000 ;
    const data = new Date(tempo);

    return <h2> In { this.props.country }  is   {data.toLocaleTimeString() }
    <button onClick={this.toggleWatch}>{this.state.stopped ? 'Start' : 'Stop'}</button>
    </h2>
   }
   toggleWatch = (e) => {
      this.setState((state, props) => { 
        state.stopped ? this.startWatch() :  clearInterval(this.interval);
          return  {stopped: ! state.stopped};
      })
   };

   tick = () => {
  
   this.setState((precState, props) => {
        return {
           timestamp: precState.timestamp + props.secs*1000
        }
   });
   
};
  startWatch(){
    this.interval =  setInterval(this.tick, this.props.secs*1000);
  }
  // setInterval(this.tick, 1000);
   componentDidMount(){
       console.log('Component did update')
     this.startWatch();
   }
   componentWillUnmount(){
       clearInterval(this.interval);
   }
}

export default Clock;