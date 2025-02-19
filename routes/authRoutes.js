const express=require("express");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const User=require("../model/User");

const router=express.Router();

// signup
router.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body;
    
    try{
        const userExists=await User.findOne({email});

        if(userExists) return res.status(400).json({message:"user already exits"});

        const hashedPassword=await bcrypt.hash(password,10);
        const user=await User.create({name,email,password:hashedPassword});

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"})

        res.status(201).json({token,userId:user._id});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"error in siginh up",error});
    }
});

// login
router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user) return res.status(400).json({message:"Invalid email"});

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:"incorrect password"});

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});

        res.status(201).json({token,userId:user._id});
    }catch(error){
        res.status(500).json({message:"error in login"});
    }
});

module.exports=router;