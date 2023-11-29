import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      },
    )};

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      
      setloading(true)
      const res = await fetch(`/api/auth/signup`, 
      {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if(data.success === false){
        setloading(false);
        setError(data.message);
        return;
      }
      setloading(false)
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setloading(false);
      setError(error.message);
      console.log(formData);
    }
  };
  // setloading(false);
  return (
    <div className='p-3 max-w-lg mx-auto'>
<h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
  <input type="text" id='username' placeholder='Username' className='border p-3 rounded-lg outline-none' onChange={handleChange}/>
  <input type="email" id='email' placeholder='Email' className='border p-3 rounded-lg outline-none' onChange={handleChange}/>
  <input type="password" id='password' placeholder='Password' className='border p-3 rounded-lg outline-none' onChange={handleChange}/>
  <button disabled={loading} className='bg-slate-700 text-[#fff] p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'> 
  {loading ? 'loading...' : 'Sign Up'}</button>
</form>
<div>
<div className='flex gap-2 mt-3'><p>Have an account?</p><Link to={"/sign-in"}><span className='text-blue-700'>Sign In</span></Link></div></div>
{error && <p className='text-[red]'>{error}</p>}
    </div>
  )}