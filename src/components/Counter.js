


import React ,  { Component } from 'react'

class Counter extends Component {
  constructor(){
      super();
      this.state={number:1}
    
      this.incrimenter=this.incrimenter.bind(this);
      this.decrimenter=this.decrimenter.bind(this);
 }



 incrimenter(){
  this.setState(prevState=>{
    return{number:prevState.number+1};
  })
  }
  decrimenter(){
    this.setState(prevState=>{
      return{number:prevState.number-1};
    })
  }

  render(){
    return (
      <div>
        <p>{this.state.number}</p>
       <button className='btn btn-success' onClick={this.incrimenter}>incrimenter </button>
       <button className='btn btn-success' onClick={this.decrimenter}>decrimenter </button>
       
      </div>
    );
  }
}
   

export default Counter;