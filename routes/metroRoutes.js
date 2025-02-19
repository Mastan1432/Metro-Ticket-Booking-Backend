const express=require("express");
const router=express.Router();
const {calculateFare,metroStations}=require("../utils/fareUtils");
const Ticket = require("../model/Ticket");



//get stations route
router.get("/stations",(req,res)=>{
    res.json(metroStations);
});

// get fare route
router.get("/fare",(req,res)=>{
    const {source,destination}=req.query;

    const fare=calculateFare(source,destination);
    if(fare==null) return res.status(400).json({message:"Invalid stations"});
    res.json({fare});
});

// get tickets
router.get("/alltickets",async (req,res)=>{
    try{
        const userId=req.query.userId;
        console.log(userId);
        const tickets=await Ticket.find({userId});
        console.log(tickets);
        res.status(200).json(tickets);

    }catch(error){
        console.error("Error fetching tickets",error);
        res.status(500).json({message:"server error"});
    }
});

router.delete("/deleteAllTickets",async(req,res)=>{
    try{
        const userId=req.query.userId;
        await Ticket.deleteMany({userId});
        console.log("deleted");
        res.status(200).json({message:"deleted all tickets"});
    }
    catch(error){
        console.error("error on deleting tickets",error);
        res.status(500).json({message:"server error"});
    }
})
module.exports=router;