import React from 'react'
import LandingPage from '../../components/LandingPage'
import RegisterForm from '../../components/RegisterForm'
import UserContext from '../../utils/UserContext'
import LoginForm from '../../components/LoginForm'
// import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'



const Landing = () => {

  return (

    <>
    <Grid container justify= "flex-end" alignItems="flex-start" direcion="row">
      <LoginForm/>
      <RegisterForm/>
    </Grid>
      <h1>RATL</h1>
      <LandingPage />
    </>
  )
}

export default Landing