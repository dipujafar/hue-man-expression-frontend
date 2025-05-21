import { envConfig } from "@/config"

export const previewImage = (src: string)=>{
    if(src?.includes("http") || src?.includes("https")){
        return src
    }
    const fullUrl = envConfig?.imagePreview + src;
    return fullUrl; 
}