import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Calendar from './pages/Events'
import Archived from './pages/Archived'
import Jobs from './pages/Jobs'
import Landing from './pages/Landing'
import UserContext from './utils/UserContext'
import UserAPI from './utils/UserAPI'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'


const { loginUser, registerUser } = UserAPI

const App = () => {

  const [userState, setUserState] = useState({
    userFullName: '',
    userEmail: '',
    usersname: '',
    userPassword: '',
    shouldRedirect: false
  })

  userState.setRedirect= (shouldRedirect) =>{
    setUserState({...userState, shouldRedirect})
  }

  userState.handleLogout = () => {
    localStorage.clear()
    window.location.href = '/'
  }

  userState.handleLogin = (event) => {
    event.preventDefault()

    let user = {
      username: userState.usersname,
      password: userState.userPassword
    }

    loginUser(user)
      .then(({ data }) => {
        localStorage.setItem('userAuth', data.token)
        localStorage.setItem('name', data.currentUser)
        setUserState({ ...userState, shouldRedirect: true })
      })
      .catch(e => console.error(e))
  }

  userState.handleInputChange = (event) => {
    setUserState({ ...userState, [event.target.name]: event.target.value })
  }

  userState.handleRegisterUser = (event) => {
    event.preventDefault()

    let user = {
      name: userState.userFullName,
      email: userState.userEmail,
      username: userState.usersname,
      password: userState.userPassword
    }

    registerUser(user)
      .then(() => {
        setUserState({
          ...userState,
          userFullName: '',
          userEmail: '',
          usersname: '',
          userPassword: ''
        })
      })
      .catch(e => console.error(e))
  }

  return (

    <Router>
      <Switch>

        <UserContext.Provider value={userState}>
          <Route exact path="/">
           <Landing />
          </Route>

          <Route path="/home">
            <Navbar />
            <Home />
            <BottomNav />
          </Route>

          <Route path="/archived">
            <Navbar />
            <Archived />
            <BottomNav />
          </Route>

          <Route path="/jobs">
            <Navbar />
            <Jobs />
            <BottomNav />
          </Route>

          <Route path="/calendar">
            <Navbar />
            <Calendar />
            <BottomNav />
          </Route>

        </UserContext.Provider>

      </Switch>

    </Router>

  )
}

export default App
