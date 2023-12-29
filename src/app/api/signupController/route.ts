import { writeFile, readFile, readdir, unlink} from "fs/promises";
import { promisify } from "util";
import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";
import { join, extname, dirname } from "path";
import prisma from "@/app/mailPage/lib/prismaGlobal";

export async function GET(request: NextRequest) {
  return NextResponse.json({ success: true });
}

export async function POST(request: NextRequest) {
  try {
    
    const setMovies = await request.json();
  const {name , email , password} = setMovies ; 

  console.log(name , email , password)

 const isAlreadySignedup =  await prisma.author.findFirst({
    where:{
        email:email
    }
  })

if(isAlreadySignedup?.id != undefined ){
  return NextResponse.json({ response:"user already exist" });
    
}else{
 
  const signedUp = await prisma.author.create({
    data:{
         name:name,
         email:email,
         password:password
    }
  })

  return NextResponse.json({message:"Registration was successfull" , response:signedUp });
}


    } catch {
    return NextResponse.json({ response: "not correct" });
  }
}
