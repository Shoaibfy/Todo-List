import React, { Component } from 'react';

import './App.css';


class Todo extends Component{
  constructor(props){
  super(props);
  this.state={
    text:""

  }

  this.sendInput=this.sendInput.bind(this);
  this.takeInput=this.takeInput.bind(this);
}

sendInput(){
  this.props.takeContext(this.state.text);
  this.setState({
    text:""
  })
}

takeInput(value){
this.setState({
  text:value
});

}


  render() {
    return (
      <div className="todo"> Adding todo list details:
        <div>
          <input
           type="text"
           onChange={event =>this.takeInput(event.target.value)}
           value={this.state.text}
           maxLength={100}/>
           <div>
          <button 
          type="submit"
          onClick={this.sendInput}
          value={this.state.text}>ADD
          </button>
         
          </div>
        </div>  
        <div>
          Total charecters:{100-((this.state.text).length)}
        </div>      
      </div>
    );
  }
}



class App extends Component {
  constructor(props){
  super(props);
  this.state=({
    note:"",
    items:[]
  });
  this.displayText=this.displayText.bind(this);
}

displayText(text){
  this.setState({
    note:text,
    items:[...this.state.items,note]
  })
  }               

  

  render(){
    return (
      <div className="todo">
      <Todo takeContext={this.displayText}/>
        <div>your list is added here:
          
          {this.state.items.map((item,index)=>(
            <div  key={index} > 
           
              <input type="checkbox" className="unche"/>
              <span>{item}</span>
             
            </div>

          ))}
          <div>
           <button>
             Remove
          </button>
          </div>
        </div>
        
      </div>

    );

          }
        }
export default App;
