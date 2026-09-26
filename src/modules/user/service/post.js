import { addData } from "../db/index.js"

export const postData = async (data) => {
  try {
    const result = await addData(data)
    
    return result
  } catch (err) {
    // Log the error and re‑throw so the controller can handle it
    console.error('⚠️ postData error:', err);
    throw err;
  }
};