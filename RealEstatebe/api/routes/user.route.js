import express  from "express";
import { user } from "../controllers/user.controller.js";

const router = express.Router()

router.get('/user',user)
// router.get('/api',(req,res)=>{
//     res.json({
//         message: "wassup bossman"
//     })
// })


export default router 