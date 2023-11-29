import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next)=>{
    // console.log(req.body);
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User({username,email,password:hashedPassword});
    try {
        await newUser.save()
        res.status(201).json('User created successfully')
    } catch (error) {
        // res.status(500).json(error.message);
        // next(errorHandler(500,'error from the function'));
        next(error);
    }}

    export const signin = async (req, res, next) => {
        const {email,password} = req.body
        try {
            const validUser = await User.findOne({ email })
            if(!validUser) return next(errorHandler(404, 'User not Found!'))
            const validPassword = bcryptjs.compareSync(password,validUser.password)
            if(!validPassword) return next(errorHandler(401,'Wrong Credential!'))
            const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
            const { password:pass, ...rest } = validUser._doc;
            res.
            cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);
        } catch (error) {
            next(error);
        }
    }