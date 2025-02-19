const mongoose=require("mongoose");

const ticketSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    source:String,
    destination:String,
    passengers:Number,
    fare:Number,
    ticketId:String,
    createdAt:{type:Date,default:Date.now},
    expiresAt:Date,
    qrCode: { type: String, required: false },
});

module.exports=mongoose.model("Ticket",ticketSchema);