import React from 'react'
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  const handleGoogleClick = async () =>{
    try {
      
    } catch (error) {
      console.log('could not sign in with google', error)
    }
  }
  return (
    <button className='bg-red-700 text-[#ffff] uppercase hover:opacity-95 rounded-lg p-3 flex justify-center  items-center flex-row gap-1' type='button' 
    onClick={handleGoogleClick}>
      Contiunie with <FcGoogle size={22}/>
    </button>
  )
}
