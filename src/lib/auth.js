import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("studio-space");
export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
    socialProviders: {
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID , 
            clientSecret: process.env.GITHUB_CLIENT_SECRET, 
        }, 
    },
   emailAndPassword: { 
    enabled: true, 
  }, 
  
  
});