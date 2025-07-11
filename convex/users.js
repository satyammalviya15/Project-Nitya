import { mutation } from "./_generated/server";
import {v} from "convex/values";

export const CreateUser=mutation({
    args:{
        name:v.string(),
        email:v.string(),
        picture:v.string()
    },
    handler:async(convexToJson,args)=>{
        //if user already exist
        const user=await convexToJson.db.query('users').filter((q)=>q.eq(q.field('email'),args.email)).collect();

        //if Not Then Insert new user
        if(user?.length ==0){
            const result =await convexToJson.db.insert('users',{
                name:args.name,
                email:args.email,
                picture:args.picture,
                credits:3
            })
            return result;
        }
        return user[0];
    }
})