
import app from "./app.js";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// Start the server and listen on the specified port
const PORT = process.env.PORT || 3000; // Default to port 3000 if not specified
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
