import { useState } from "react"
import tech from "../assets/5e0ee1e252c018037a9b65daca8bfbf7.jpg"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import UserAcc from "../Global/jotai"
import {SigninAcc} from "../Api/Authapi"
import { useNavigate } from "react-router-dom"

const Signin = () => {
  const   [state, setState] = UserAcc();
  console.log(state)
const [checked, setShowChecked] = useState<boolean>(false)
const navigate= useNavigate();
const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

const {register, reset, handleSubmit} = useForm({
  resolver: yupResolver(schema),
});

const onHandleSubmit = handleSubmit(async (data:any) => {
  const {password,email} = data
  SigninAcc({password,email}).then(()=>{
    console.log("handle sumbit",data)
    setState("/")
    navigate("/authenticate-token")
  });
  reset()
});

  return (
    <div>
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="w-[80%] h-[87vh] items-center shadow-2xl rounded-[7px] border-[1px] border-[#ffff] flex-wrap flex">
<form action="" onSubmit={onHandleSubmit} className="w-[57%] h-[87vh] flex justify-center items-center flex-col flex-wrap gap-[20px]">
<b className="h-[35px] text-[30px]">Sign-In</b>


<nav className="w-[50%] min-h-[10px] border-[2px] border-[blue] relative rounded-[4px] hover:border-[green]">
<span className="bg-[#fff] flex justify-center items-center mt-[-15px] absolute ml-3 text-center ">Email</span>
<input type="text" placeholder="Email" className="mt-[20px] h-[35px] w-[100%] px-2 outline-none text-[#000]" {...register("email")}/> 
 </nav>
<nav className="w-[50%] min-h-[10px] border-[2px] border-[blue] relative rounded-[4px] hover:border-[green]">
<span className="bg-[#fff] mt-[-15px] absolute ml-3 text-center">Password</span>
<input type="password" placeholder="Password" className="mt-[20px] h-[35px] w-[100%] px-2 outline-none text-[#000]" {...register("password")}/> 
 </nav>
<div className="w-[50%] flex-wrap flex max-sm:w-screen max-sm:text-[10px]"><input type="checkbox" name="" id="" className="bg-[green]" 
onClick={(e:any) =>{
  setShowChecked(e.target.checked)
}}/><span>Agree to Terms and Conditions</span></div>
<button className={`py-[7px] px-[50px] justify-center items-center flex
${checked?  "bg-[blue]" : "bg-gray-400"} text-[#FFF] rounded-[7px]`}
disabled={!checked}>Sign-In</button>
</form>
<img src={tech} alt="" className="w-[42%] h-[85vh] object-cover flex items-center justify-center rounded-[5px]"/>
      </div>
      </div>
    </div>
  )
}

export default Signin