import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Helper to upload a file
// Helper to upload a file
export const uploadImage = async (fileBase64, publicId = "") => {
  try {
    const result = await cloudinary.uploader.upload(fileBase64, {
      public_id: publicId,
    });
    return result;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error(error.message);
  }
};

// Helper to optimize the image URL
export const getOptimizedUrl = (publicId, options = {}) => {
  return cloudinary.url(publicId, {
    fetch_format: "auto",
    quality: "auto",
    ...options,
  });
};

export default cloudinary;
