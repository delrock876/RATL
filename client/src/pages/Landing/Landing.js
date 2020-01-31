import React from 'react'
import LandingPage from '../../components/LandingPage'
import RegisterForm from '../../components/RegisterForm'
import UserContext from '../../utils/UserContext'
import LoginForm from '../../components/LoginForm'
import Grid from '@material-ui/core/Grid'

const Landing = () => {

  return (

    <>
      <Grid container justify="flex-end" alignItems="flex-start" direcion="row">
        <LoginForm />
        <RegisterForm />
      </Grid>
      <LandingPage />
    </>
  )
}

export default Landing