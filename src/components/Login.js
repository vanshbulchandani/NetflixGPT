import React from 'react'
import { useState } from 'react';
import Header from './Header'

const Login = () => {

  const [isSignForm, setIsSignForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm); 
  }
  return (
    <div >
      <Header/>
      <div className='absolute'>
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg"/>
      </div>
      <form className='w-1/4 absolute p-12 bg-black bg-opacity-85 my-36 mx-auto  right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold text-3xl p-4'>
          {isSignForm? "Sign In":"Sign Up"}</h1>
        <input type="email" placeholder="Email or phone number" className='p-4 my-4 w-full bg-gray-800'/> 
        <input type="password" placeholder="Password" className='p-4 my-4 w-full bg-gray-800'/> 
        <button className='p-4 my-6 bg-red-600 w-full'>
        {isSignForm? "Sign In":"Sign Up"}</button>
        <p className='cursor-pointer ' onClick={toggleSignInForm}>
           {isSignForm? "New to Netflix? Sign Up Now":"Already a user! Sign In"}
        </p>
      </form>
    </div>
  ) 
}

export default Login
