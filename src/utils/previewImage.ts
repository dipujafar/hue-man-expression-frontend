import { envConfig } from "@/config"

export const previewImage = (src: string)=>{
   let  formattedUrl = src;

   if(src?.includes("uploads")){
    formattedUrl = src.split("uploads")[1];
   
   }


    if(formattedUrl?.includes("http") || formattedUrl?.includes("https")){
        return formattedUrl
    }
    const fullUrl = envConfig?.imagePreview + formattedUrl;
    return fullUrl; 
}