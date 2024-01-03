import express  from "express";

import { verifyToken } from "../utils/verifyUser.js";
import { test, updateUser} from "../controllers/usercontroller.js";

const router = express.Router()

// router.get('/user',user)
// router.get('/api',(req,res)=>{
//     res.json({
//         message: "wassup bossman"
//     })
// })

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);

export default router ;