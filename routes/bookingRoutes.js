const express=require("express");
const router=express.Router();
const Ticket=require("../model/Ticket");
const {calculateFare}=require("../utils/fareUtils");
const {v4:uuidv4}=require("uuid");
const QRCode = require("qrcode");


// book a ticket
router.post("/book",async (req,res)=>{
    const{userId,source,destination,passengers}=req.body;
    const fare=calculateFare(source,destination)*passengers;

    if(fare===null) return res.status(400).json({messge:"invalid stations"});

    const ticketId=uuidv4();

    // generate qr
    const qrData=JSON.stringify({ticketId,userId,source,destination,fare});
    console.log(qrData);
    const qrCode=await QRCode.toDataURL(qrData);

    const ticket=new Ticket({userId,source,destination,passengers,fare,ticketId,qrCode});
    console.log(ticket);
    await ticket.save();
    
    

    res.json({message:"Ticket Booked successfully",ticketId,fare,qrCode});
});

module.exports=router;