import React from 'react'
import LandingPage from '../../components/LandingPage'
import RegisterForm from '../../components/RegisterForm'
import UserContext from '../../utils/UserContext'


const Landing = () => {



  return (

    <>
      <h2>Landing Page</h2>
      <RegisterForm/>
      <LandingPage />

    </>
  )
}

export default Landing