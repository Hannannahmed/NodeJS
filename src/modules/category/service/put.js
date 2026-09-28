import { categoryUpdateModel } from "../db/index.js"

export  const categoryUpdateService =async (req,id) =>{
    try{
        const response = await categoryUpdateModel(req,id)
        return response 
    }catch(err){
        throw err
    }
}