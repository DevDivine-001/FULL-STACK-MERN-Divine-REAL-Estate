import express, {} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
dotenv.config();

mongoose.connect(process.env.mongoose).then(()=>{
    console.log('Connected to mongoosedb🚀🚀🚀🚀!');
}).catch((error)=>{
    console.log(error);
});

const app = express();

app.use(express.json())

app.listen(3405,()=>{
    console.log('Server is running on port 3405 baby🚀🚀🚀🚀🚀');
});

// app.get('/test',(req,res)=>{
//     res.send('Hello Divine🚀🚀🚀🚀')
// })

// app.get('/test',(req,res)=>{
//     res.json({
//         message: 'Hello Bossman⭐⭐⭐⭐⭐⭐⭐⭐',
//     })
// })

app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)

app.use((err,req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error Baby';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})