import React, { Component } from 'react';
import './App.css';
import './CSS/User.css'

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: ''}
    ]
  };
  switchName = (event) => {
    this.setState({
      persons: [
        { name: event.target.value }
      ]
    });
  };
  switchDefault = () => {
    this.setState({
      persons: [
        { name: '' }
      ]
    })
  }
    
  render(){
  return (
    <div className="App">
      <UserInput change={this.switchName} default={this.state.persons[0].name} /><br />
      <UserOutput name={this.state.persons[0].name}/>
      <button className='button' onClick={this.switchDefault}>Reset</button>
    </div>
  );
}
}

export default App;
