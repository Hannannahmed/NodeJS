import { Model } from "../models/index.js"

export const addData = async (data) => {
  try {
    const result = await Model.create(data);

    const response = await Model.findById(result._id)
      .populate("author", "-password");

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAll = async()=>{
    try {
       const result =await Model.find().populate("author", "-password")
       const response = result.map((item) => item.toObject());
       return response  
    } catch (error) {
        console.log(error)
        throw error
    }
}