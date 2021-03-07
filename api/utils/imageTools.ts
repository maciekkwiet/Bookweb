const cloudinary = require('cloudinary');
import { response } from 'express';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export async function uploadImage(image: any) {
  try {
    const result = await cloudinary.uploader.upload(image);
    return result?.secure_url;
  } catch (error) {
    response.status(500).send({
      message: 'fail',
      error,
    });
  }
}
