import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://greatstack:DNBn7G4nnMbdBE4F@cluster0.5dn2mum.mongodb.net/food-del").then(()=>console.log("DB Connected"));
}