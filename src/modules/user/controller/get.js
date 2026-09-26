import { getData } from "../service/get.js"
export const getController =async (req,res) =>{
     try{
        const data =await getData()
     
        res.status(200).json({message:"Data inserted successfully",data})
     }catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error",err})
     }

}