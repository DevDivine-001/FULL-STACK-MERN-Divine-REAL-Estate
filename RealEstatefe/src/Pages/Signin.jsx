import React from 'react'

export default function Signin() {
  return (
    <div>
<h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
<form className='flex justify-center items-center flex-col gap-4'>
  <input type="text" id='username' placeholder='Username' className='border p-3 rounded-lg'/>
  <input type="email" id='email' placeholder='Email' className='border p-3 rounded-lg'/>
  <input type="password" id='password' placeholder='Password' className='border p-3 rounded-lg'/>
</form>
    </div>
  )
}
