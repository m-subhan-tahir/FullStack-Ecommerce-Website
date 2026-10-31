import mongoose from "mongoose";
import dns from "dns"; // 1. Import dns module

// 2. Force Node to use Google Public DNS instead of your local ISP
dns.setServers(["8.8.8.8", "8.8.4.4"]); 
const connectDB = async () => {
  const uri = process.env.MONGODB_URL;

  if (!uri) {
    throw new Error("❌ MONGODB_URL is undefined");
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed", error);
  }
};

export default connectDB;
