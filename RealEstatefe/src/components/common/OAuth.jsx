import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../../firebase'
import { FcGoogle } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../../Redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

export default function OAuth() {
  const navigate = useNavigate()
  const dispath = useDispatch()
  const handleGoogleClick = async () =>{
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider)

      const res = await fetch("/api/auth/google", {
        method:"POST",
        headers:{
          'Content-Type':"application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email:result.user.email,
          photo:result.user.photoURL})
      })
      const data = await res.json()
      dispath(signInSuccess(data))
      navigate("/")

      // console.log(result)

    } catch (error) {
      console.log('could not sign in with google', error)
    }
  }
  return (
    <button
    onClick={handleGoogleClick}
    type='button'
    className='bg-red-700 text-[#ffff] uppercase hover:opacity-95 rounded-lg p-3 flex justify-center  items-center flex-row gap-1' 
    >
      Continue with <FcGoogle size={22}/>
    </button>
  )
}
