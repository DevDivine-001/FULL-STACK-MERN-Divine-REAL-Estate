import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/common/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(null);
  // const [loading, setloading] = useState(false);
  const {loading, error} = useSelector((state) => state.user)
  const dispatch = useDispatch()
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
      
      // setloading(true)
      dispatch(signInStart())
      const res = await fetch(`/api/auth/signin`, 
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
        // setloading(false);
        // setError(data.message);
        dispatch(signInFailure(data.message))
        return;
      }
      // setloading(false)
      // setError(null);
      dispatch(signInSuccess(data))
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message))
      // setloading(false);
      // setError(error.message);
      // console.log(formData);
    }
  };
 
  return (
    <div className='p-3 max-w-lg mx-auto'>
<h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
  <input type="email" id='email' placeholder='Email' className='border p-3 rounded-lg outline-none' onChange={handleChange}/>
  <input type="password" id='password' placeholder='Password' className='border p-3 rounded-lg outline-none' onChange={handleChange}/>
  <button disabled={loading} className='bg-slate-700 text-[#fff] p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'> 
  {loading ? 'loading...' : 'Sign in'}</button>
  <OAuth/>
</form>
<div>
<div className='flex gap-2 mt-3'><p>Dont Have an account?</p><Link to={"/sign-up"}><span className='text-blue-700'>Sign Up</span></Link></div></div>
{error && <p className='text-[red]'>{error}</p>}
    </div>
  )}