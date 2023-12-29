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
  const {email , password} = setMovies ; 

 const isSignin =  await prisma.author.findFirst({
    where:{
        email:email
    }
  })

if(isSignin?.id != undefined ){
  return NextResponse.json({ message:"Login successfull" , response:isSignin});
    
}else{
 
  return NextResponse.json({message:"User Not Found"});
}


} catch {
    return NextResponse.json({ response: "server error" });
  }
}
