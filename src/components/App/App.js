import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from '../Header/header'
import LandingPage from '../../routes/LandingPg/Landing'
import RegistrationPage from '../../routes/RegistrationPg/RegistrationPg'
import HomePage from '../../routes/HomePg/HomePg'
import ProfilePage from '../../routes/UserProfile/UserPg'
import NewPostPage from '../../routes/NewPostPg/NewPostPg'
import PostPage from '../../routes/PostPg/PostPg'

class App extends Component{
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
      {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
      <Switch>
        <Route
          exact
          path={'/'}
          component={LandingPage}
        />
        <Route
          path={'/register'}
          component={RegistrationPage}
        />
        <Route
          path={'/homepage'}
          component={HomePage}
        />
        <Route
          exact
          path={'/profile'}
          component={ProfilePage}
        />
        <Route
          path={'/profile/:userId'}
          component={ProfilePage}
        />
        <Route
          path={'/newPost'}
          component={NewPostPage}
        />
        <Route
          exact
          path={'/post/:postId'}
          component={PostPage}
          />
      </Switch>
      </main>
    </div>
    )
  }
}

export default App;
