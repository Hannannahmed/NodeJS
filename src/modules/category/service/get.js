import { categoryGetModel } from "../db/index.js"

export const  categoryGetService =async()=>{
    try{
        const response = await categoryGetModel()
        return response
    }catch(err){
        throw err
    }
}