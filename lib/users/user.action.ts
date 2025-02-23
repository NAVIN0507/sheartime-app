import { db } from "@/database/neon"
import { shops, users } from "@/database/schema"
import { eq  , and} from "drizzle-orm"
import { date } from "drizzle-orm/mysql-core";

export const  validateUser = async (email:string )=>{
    try {
        const result  =   await db.select().from(users).where(eq(users.email , email)).limit(1);
  if(!result) return {success:false}
  return {success : true , data : result}
    } catch (error) {
        return {success:false}
    }
  
}
export const getAllShops = async()=>{
    try {
        const shop = await db.select().from(shops)
        return {data:shop}
    } catch (error) {
        console.log("Some thing went Wrong")
    }
}