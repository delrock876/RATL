import React ,{ useEffect, useContext }from 'react'
import LandingPage from '../../components/LandingPage'
import UserContext from '../../utils/UserContext'



const Landing = () => {

  const { setLoggingOut } = useContext(UserContext)

  useEffect(()=>{
    setLoggingOut(false)
  }, [])
  return (

    <>
      <LandingPage />
    </>
  )
}

export default Landing