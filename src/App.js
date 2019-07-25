import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

import Dogs from './dogs/components/Dogs'
import Dog from './dogs/components/Dog'
import DogEdit from './dogs/components/DogEdit'
import DogCreate from './dogs/components/DogCreate'

import { SnackbarProvider } from 'notistack'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render () {
    const { user } = this.state

    return (
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={1500}
      >
        <Header user={user} />
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/dogs' render={() => (
            <Dogs user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/dogs/:id' render={
            () => (<Dog user={user} />)
          } />
          <AuthenticatedRoute user={user} exact path='/dogs/:id/edit' render={
            () => (<DogEdit user={user} />)
          } />
          <AuthenticatedRoute user={user} exact path='/create-dog' render={
            () => (<DogCreate user={user} />)
          } />
        </main>
      </SnackbarProvider>
    )
  }
}

export default App
