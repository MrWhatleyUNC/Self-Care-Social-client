import React, { Component } from 'react';
import './App.css';
import Header from '../Header/header'
import LoginForm from '../LoginForm/LoginForm'

class App extends Component{
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  
  render(){
    return(
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <LoginForm/>
      </main>
    </div>
    )
  }
}

export default App;
