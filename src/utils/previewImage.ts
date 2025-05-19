import { envConfig } from "@/config"

export const previewImage = (src: string)=>{
    const fullUrl = envConfig?.imagePreview + src;
    return fullUrl; 
}