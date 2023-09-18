import { ROUTES_BACK } from "../Routes/index.js";
import {  BaseURLAPI2 } from "../config/Base_URL.js";
import { method } from "./methods.js";

export const CloudinaryFetch={    

    deleteOneImgCloudinary: async(body,token)=> { //IDENTIFICAR EL ERROR
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}

        let res= await method.post(BaseURLAPI2+ROUTES_BACK.ADMIN.CLOUDINARY.DELETEONEIMG,body,headers)

        return res
    },   

} 