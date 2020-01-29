import React from 'react'
import LandingPage from '../../components/LandingPage'
import RegisterForm from '../../components/RegisterForm'
import UserContext from '../../utils/UserContext'
import LoginForm from '../../components/LoginForm'



const Landing = () => {

  return (

    <>
      <h2>Landing Page</h2>
      <LoginForm/>
      <RegisterForm/>
      
      <LandingPage />

    </>
  )
}

export default Landing