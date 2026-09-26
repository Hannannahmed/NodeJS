import { postData } from "../service/post.js"

export const postController =async (req,res) =>{
     try{
        const data =await postData(req.body)
     
        res.status(200).json({message:"Data inserted successfully",data})
     }catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error",err})
     }

}