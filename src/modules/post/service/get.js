import { getAll } from "../db/index.js"

export const getData = async ( ) => {
  try {
    const result = await getAll()
    
    return result
  } catch (err) {
    // Log the error and re‑throw so the controller can handle it
    console.error('⚠️ postData error:', err);
    throw err;
  }
};