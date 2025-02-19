const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const connectDB=require("./config/db");
const authRoutes=require("./routes/authRoutes");
const metroRoutes=require("./routes/metroRoutes")
const bookingRoutes=require("./routes/bookingRoutes");

dotenv.config();
connectDB();

const app=express();

app.use(express.json());
app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/metro",metroRoutes);
app.use("/api/booking",bookingRoutes);


const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`listening in ${PORT}` );
})