import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connected"));

    // mongodb+srv://<db_username>:<db_password>@cluster0.5dn2mum.mongodb.net/?appName=Cluster0
}