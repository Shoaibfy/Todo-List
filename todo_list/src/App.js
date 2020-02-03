import React, { Component } from 'react';

import './App.css';


class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""

    }

    this.sendInput = this.sendInput.bind(this);
    this.takeInput = this.takeInput.bind(this);
  }

  sendInput() {
    this.props.takeContext(this.state.text);
    this.setState({
      text: ""
    })
  }

  takeInput(value) {
    this.setState({
      text: value
    });

  }


  render() {
    {console.log("This is TODO component")}
    return (
      <div className="todo"> Adding todo list details:
      
        <div className="todo1">
          <input
            type="text"
            onChange={event => this.takeInput(event.target.value)}
            value={this.state.text}
            maxLength={100} />
          <div>
            <button
              type="submit"
              onClick={this.sendInput}
              value={this.state.text}>ADD
          </button>

          </div>
        </div>
        <div>
          Total charecters:{100 - ((this.state.text).length)}
        </div>
      </div>
    );
  }
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      note: "",
      items: []
    });
    this.displayText = this.displayText.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  displayText(text) {
    this.setState({
      note: text,
      items: [...this.state.items, text]
    })
  }

  deleteItem(id) {
    const newList = this.state.items.filter(item => item.id !== id);
    console.log("id i am getting", id, newList)
    this.setState({
      items: [...this.state.items, newList]
    })
  }



  render() {
    {console.log("This is under render method")}
    return (
      <div className="todo">
        {console.log("Thid is app component")}
        <Todo takeContext={this.displayText} />
        <div>your list is added here:

          {this.state.items.map((item, index) => (
          <div key={index} >
            {console.log("This is console from displaying")}

            <input type="checkbox" className="unche" />
            <span>{item}</span>
            <button onClick={() => this.deleteItem(item.id)}>{console.log("Component id", item.id)}Remove</button>


          </div>

        ))}

        </div>

      </div>

    );

  }
}
export default App;
