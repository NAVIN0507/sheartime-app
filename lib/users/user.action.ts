import { db } from "@/database/neon"
import { users } from "@/database/schema"
import { eq  , and} from "drizzle-orm"

export const  validateUser = async (email:string )=>{
    try {
        const result  =   await db.select().from(users).where(eq(users.email , email)).limit(1);
  if(!result) return {success:false}
  return {success : true , data : result}
    } catch (error) {
        return {success:false}
    }
  
}