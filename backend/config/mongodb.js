import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(`${process.env.MONOGODB_URL}/e-commerce`)
}

export default connectDB;