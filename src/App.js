import React, {Component} from 'react';
import ChildComponent from './ChildComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          Title: 'First Header'
        }, {
          Title: 'Second Header'
        }, {
          Title: 'Third Header'
        }
      ],
      "parenttext": "This is my Parent Component"
    }
  }

  render() {
    return (
      <div className="App">
        Hello World!!!
        <p>{this.state.parenttext}</p>
         <ChildComponent headrertext={this.state.parenttext}/>      
      </div>
    );
  }
}

export default App;
