import {FaSearch}  from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const {currentUser} = useSelector
  (state => state.user)
  return (
      <header className='shadow-md sticky top-0 z-50 bg-[white]'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
       <Link to="/">
       <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Divine</span>
            <span className='text-slate-700'>Estate </span>
          </h1>
       </Link>
          <form action="" className='bg-slate-100 p-3 rounded-lg flex items-center justify-center'>
<input type="text" className="bg-transparent focus:outline-none w-24 sm:w-64" placeholder="Search..."/>
            <FaSearch className='text-slate-600'/>
          </form>
          <ul className='flex gap-4'>
<Link to="/"><li className='text-slate-700 hidden sm:inline hover:cursor-pointer'>Home</li></Link>
            <Link to="/About" className='flex'>
            <li className='text-slate-700 hover:cursor-pointer flex justify-center items-center text-center'>About</li>
            </Link>
            
            <Link to="/profile">
{currentUser ? (
<img src={currentUser.avatar} alt="profile" className='rounded-full h-7 w-7 object-cover'/>
):(
            <li className='text-slate-700 hover:cursor-pointer'>Sign In</li>
)}
            </Link>
        
          </ul>
        </div>
      </header>

  )
}