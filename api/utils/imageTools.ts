import { resolve } from 'bluebird';
import { response } from 'express';
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export async function uploadImage(image: any) {
  await cloudinary.uploader
    .upload(image)
    .then((result: any) => {
      return result.secure_url;
    })
    .catch((error: Error) => {
      response.status(500).send({
        message: 'fail',
        error,
      });
    });
}

export function retrieveImage(id: any) {}
