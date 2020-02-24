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
    helperText: '',
    successMsg: '',
    shouldRedirect: false,
    formValid: true,
    loginValid: true,
    userExists: false,

  })

  userState.setRedirect = (shouldRedirect) => {
    setUserState({ ...userState, shouldRedirect })
  }

  userState.handleLogout = () => {
    localStorage.clear()
    window.location.href = '/'
  }

  userState.handleLogin = (event) => {
    event.preventDefault()
let loginValid = JSON.parse(JSON.stringify(userState.loginValid))
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
      .catch(e => { 
        //if user already exists, show error
        if(e.response.status === 404){
          loginValid = false
          setUserState({...userState, loginValid})
      }
    })
  }

  userState.handleInputChange = (event) => {
    let formValid = JSON.parse(JSON.stringify(userState.formValid))
    formValid = true
    setUserState({ ...userState, [event.target.name]: event.target.value, formValid } )
  }

  userState.handleRegisterUser = (event) => {

    let successMsg = JSON.parse(JSON.stringify(userState.successMsg))
    let formValid = JSON.parse(JSON.stringify(userState.formValid))
    let helperText = JSON.parse(JSON.stringify(userState.helperText))
    let userExists = JSON.parse(JSON.stringify(userState.userExists))
    const emailRegex =
      RegExp(/^[^@\s]+@[^@\s.]+\.[^@.\s]+$/i)

    let user = {
      name: userState.userFullName,
      email: userState.userEmail,
      username: userState.usersname,
      password: userState.userPassword
    }

    if (user.name.length < 4 || !emailRegex.test(user.email) || (user.password.length < 4)) {
      formValid = false
    }
    setUserState({...userState, formValid})

    if (formValid) {

      registerUser(user)
        .then(() => {
         successMsg = 'Your account has been created'
          setUserState({
            ...userState,
            successMsg,
            userFullName: '',
            userEmail: '',
            usersname: '',
            userPassword: '',
            helperText: ''
          })
        })
        .catch(e => {
          if (e.response.status === 409) {
            userExists = true 
            helperText = 'This username already exists'
            setUserState({...userState, userExists, helperText})
          }
        })
    }

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
