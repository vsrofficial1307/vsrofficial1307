import {v2 as cloudinary} from 'cloudinary';
import fs from'fs';



const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        } )
        //file uploaded successfully
        console.log ("File uploaded successfullyon cloudinary",
        response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the file if upload fails
    }
}

export{uploadOnCloudinary}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinary.v2.uploader.upload("")