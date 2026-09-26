import { getAll } from "../db/index.js"

export const getData = async (data) => {
  try {
    const result = await getAll(data)
    // const response = result.map((item)=>item.toObject())
    delete result.password
    
    return result
  } catch (err) {
    // Log the error and re‑throw so the controller can handle it
    console.error('⚠️ postData error:', err);
    throw err;
  }
};