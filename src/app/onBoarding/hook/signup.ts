
// import prisma from '@/app/mailPage/lib/prismaGlobal'
import { PrismaClient } from '@prisma/client';
const  signupPrismaClient = async (name:string , email:string , password:string)=> {
    let prisma: PrismaClient | undefined
      prisma = new PrismaClient();
        const signupStatus = await prisma?.author.create({
           data:{
               name:name,
               email:email,
               password:password,
           }
        })
    

  return signupStatus; 
  
}

export default signupPrismaClient