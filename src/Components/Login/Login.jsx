import React from 'react'
import {SignIn}  from '@clerk/clerk-react'

const Login = () => {
  return (

    <div className='d-flex w-100 h-100 mt-35  ml-160 mb-25'>
      <SignIn />
    </div>
  )
}

export default Login