import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../src/Pages/Home"
import Signin from "../src/Pages/Signin"
import SignOut from "../src/Pages/SignOut"
import Profile from "../src/Pages/Profile"
import About from "../src/Pages/About"
import Header from "./components/common/Header"



export default function App() {
  return (
  
         <BrowserRouter>
    <Header/>
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Sign-in" element={<Signin/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Sign-Out" element={<SignOut/>}/>
<Route path="/Profile" element={<Profile/>}/>
   </Routes>
   </BrowserRouter>
   
  )
}
