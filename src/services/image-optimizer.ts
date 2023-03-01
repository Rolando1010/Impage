import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const generateRandomText = () => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array(10)
        .join()
        .split(',')
        .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
        .join('');
}

const optimizeImage = (imageURL: string) => {
    const publicID = generateRandomText();
    cloudinary.uploader.upload(imageURL, {public_id: publicID})
        .then(() => console.log("uploaded", imageURL))
        .catch(() => console.log("failed to upload", imageURL))
    const optimizedImage = cloudinary
        .image(publicID, {quality: "auto:low"})
        .split("'")[1];
    return optimizedImage;
}

export {
    optimizeImage
}