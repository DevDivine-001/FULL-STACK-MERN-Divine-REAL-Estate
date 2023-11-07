import React from 'react'
import { Link } from 'react-router-dom'

export default function Signin() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
<h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
<form className='flex flex-col gap-4'>
  <input type="text" id='username' placeholder='Username' className='border p-3 rounded-lg'/>
  <input type="email" id='email' placeholder='Email' className='border p-3 rounded-lg'/>
  <input type="password" id='password' placeholder='Password' className='border p-3 rounded-lg'/>
  <button className='bg-slate-700 text-[#fff] p-3 
  rounded-lg uppercase hover:opacity-95
  disabled:opacity-80'>Sign Up</button>
</form>
<div>
   <div className='flex gap-2 mt-3'>
  <p>Have an account?</p>
<Link to={"/sign-in"}>
  <span className='text-blue-700'>Sign In</span>
</Link>
 </div>
</div>
    </div>
  )
}
