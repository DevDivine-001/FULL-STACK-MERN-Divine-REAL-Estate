import { useSelector } from "react-redux"
import { useRef } from "react"

export default function Profile() {
  const fileRef = useRef(null)
  const {currentUser} = useSelector ((state) => state.user)
  return (

      <div className="m-auto max-w-lg p-3">
      <h1 className='text-center text-3xl font-semibold my-3'>Profile</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="file" hidden ref={fileRef} accept="image/*"/>
        <img src={FormData.avatar || currentUser.avatar} onClick={() => fileRef.current.click()} alt="profile" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center bg-[]'/>
      <input type="text" placeholder="Username" className="rounded-lg border p-3 outline-none" id="username"/>
      <input type="email" placeholder="Email" className="rounded-lg border p-3 outline-none" id="email"/>
      <input type="password" placeholder="Password" className="rounded-lg border p-3 outline-none" id="password"/>
      <button className="p-3 rounded-lg bg-slate-700 hover:opacity-95 text-[#ffff] uppercase">Update</button>
      <button className="p-3 rounded-lg bg-green-700 hover:opacity-95 text-[#ffff] uppercase">Update</button>

      <div className="flex items-center justify-between">
        <button className="p-3 rounded-lg bg-red-600 text-[#ffff] text-[12px] sm:text-sm">Delete Account</button>
        <button className="p-3 rounded-lg bg-red-600 text-[#ffff] text-[12px] sm:text-sm animate-bounce">Sign Out</button>
        <button className="p-3 rounded-lg bg-red-600 text-[#ffff] text-[12px] sm:text-sm">Delete Account</button>

      </div>
      </form>
    </div>

  )
}
