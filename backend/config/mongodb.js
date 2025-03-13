import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on("connected", () => {
        
    })
    await mongoose.connect(`${process.env.MONOGODB_URL}/e-commerce`)
}

export default connectDB;