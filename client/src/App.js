import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Calendar from './pages/Events'
import Archived from './pages/Archived'
import Jobs from './pages/Jobs'
import Landing from './pages/Landing'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {


  return (
    <Router>

      <Navbar />

      <BottomNav />
   
      <Switch>

        <Route exact path="/">
          <Landing />
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
