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
  Route
} from 'react-router-dom'
import RegisterForm from './components/RegisterForm'


const { loginUser, registerUser } = UserAPI

const App = () => {

  const [userState, setUserState] = useState({
    userFullName: '',
    userEmail: '',
    usersname: '',
    userPassword: ''
  })

  userState.handleLogin = (event)=>{
    event.preventDefault()
    let user = {
      username: userState.usersname,
      password: userState.userPassword
    }
    loginUser(user)
      .then(()=> window.location = "/home")
      .catch(e => console.error(e))
  }

  userState.handleInputChange = (event) => {
    console.log(event.target.value)
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
      .then(() => console.log('created!'))
      .catch(e => console.error(e))

  }

  return (

    <Router>

      {/* <UserContext.Provider value={userState}>
<RegisterForm/>
</UserContext.Provider>   */}

      <Navbar />

      <BottomNav />

      <Switch>

        <Route exact path="/">
          <UserContext.Provider value={userState}>
            <Landing />
          </UserContext.Provider>
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route path="/archived">
          <Archived />
        </Route>

        <Route path="/jobs">
          <Jobs />
        </Route>

        <Route path="/calendar">
          <Calendar />
        </Route>
      </Switch>

    </Router>


  )
}

export default App
