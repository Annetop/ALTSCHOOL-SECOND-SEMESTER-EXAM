import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'
import { Helmet } from 'react-helmet-async'

export const Login = () => {
   <Helmet>
     <title>Click to check Exam</title>
     <meta
       name='description'
       content='Login'
     />
     <link rel='canonical' href='/Login' />
   </Helmet>

  const [user, setUser] = useState('')
  

  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/profile'

  const handleLogin = () => {
    auth.login(user)
    navigate(redirectPath, { replace: true })
  }
  return (
    <div>
      <Helmet>
        <title>Login to check my Exam</title>
        <meta name='description' content='Login' />
        <link rel='canonical' href='/Login' />
      </Helmet>

      <label className='log'>
        Name:{' '}
        <input type='text' onChange={(e) => setUser(e.target.value)} />
      </label>
      <label className='log'>
        pasword:{' '}
        <input type='password' onChange={(e) => setUser(e.target.value)} />
      </label>

      <button onClick={handleLogin}>Login </button>

      
    </div>
  )
}
