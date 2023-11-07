import Log from "../assets/Log-2023-10-27 161252.png"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import UserAcc from "../Global/jotai"
import { useNavigate } from "react-router-dom"
import { AuthenticateAcc } from "../Api/Authapi"

const Authenticate = () => {

  const   [state, setState] = UserAcc();
  console.log(state)

const navigate= useNavigate();
const schema = yup.object({
  number: yup.string().required(),
  String: yup.string().required(),
});

const {register, reset, handleSubmit} = useForm({
  resolver: yupResolver(schema),
});

const onHandleSubmit = handleSubmit(async (data:any) => {
  const {number,String} = data
  AuthenticateAcc({number,String}).then(()=>{
    console.log("handle sumbit",data)
    setState("/")
    navigate("/")
  });
  reset()
})
  return (
    <div>
      <div className="w-[100%] h-[100vh] justify-center
       items-center flex">
        <div className="w-[80%] h-[80vh] justify-center items-center
         flex">
<form className="w-[45%] h-[55vh] justify-center items-center
flex shadow-2xl rounded-[7px] flex-col flex-wrap gap-4 max-sm:w-min" onSubmit={onHandleSubmit}>
<img className="w-[16%] h-[12vh] justify-center items-center
flex object-cover cursor-pointer rounded-[7px]" src={Log}/>
<h1 className="flex-wrap flex  max-sm:w-screen justify-center items-center">Authenticate your Account</h1>
<small className="w-[69%] h-[5vh] justify-center items-center
flex object-cover text-center flex-wrap max-sm:w-80 max-sm:text-center">
  Protecting your tickets is our top Priority.Please Confirm your
  account by entering the autharization Code Sent to
</small>
<center  className="w-[50%] h-[7vh] justify-between items-center
flex object-cover flex-wrap">
  <input type="text"  className="w-[15%] h-[5vh] justify-center items-center
flex object-cover bg-transparent rounded-[4px] text-center border-[1px] border-[#0000ff]" {...register("number")}/>
  <input type="text"  className="w-[15%] h-[5vh] justify-center items-center
flex object-cover bg-transparent rounded-[4px] text-center border-[1px] border-[#0000ff]" {...register("number")}/>
  <input type="text"  className="w-[15%] h-[5vh] justify-center items-center
flex object-cover bg-transparent rounded-[4px] text-center border-[1px] border-[#0000ff]" {...register("number")}/>
  <input type="text"  className="w-[15%] h-[5vh] justify-center items-center
flex object-cover bg-transparent rounded-[4px] text-center border-[1px] border-[#0000ff]" {...register("number")}/>
  <input type="text"  className="w-[15%] h-[5vh] justify-center items-center
flex object-cover bg-transparent rounded-[4px] text-center border-[1px] border-[#0000ff]" {...register("String")}/>
</center>
<nav className="w-[75%] h-[8vh] justify-between items-center
flex object-cover text-center bg-[] max-sm:w-80">
<nav className="w-[69%] h-[7vh] items-center flex object-cover  flex-wrap max-sm:w-screen">
<small>it may take a minute to receive your Code.</small> 
<small>Haven't received it? <span className="text-[blue] cursor-pointer">Resend a new code.</span></small>
</nav>
<nav>
  <button className="py-[7px] px-[15px] flex justify-center items-center text-[#ffff] bg-[#0000ff] rounded-[5px] text-[12px]">Submit</button>
</nav>
</nav>
</form>
        </div>
      </div>
    </div>
  )
}
export default Authenticate