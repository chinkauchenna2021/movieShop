import { writeFile, readFile, readdir, unlink} from "fs/promises";
import { promisify } from "util";
import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";
import { join, extname, dirname } from "path";
import prisma from "@/app/mailPage/lib/prismaGlobal";

export async function GET(request: NextRequest) {
  try{
    const allMovies =  await  prisma.movies.findMany()
      return NextResponse.json({ success: true  , response:allMovies});
  }catch(err){
    return NextResponse.json({ success: true  , message:"server error "});
  }
}

export async function POST(request: NextRequest) {
  const setMovies = await request.json();
const {movieURL , movieDescription , usersId} = setMovies ; 

  try {

 const isMovieCreated =  await prisma.movies.findFirst({
    where:{
        movieURL:movieURL
    }
  })

if(isMovieCreated?.id !== undefined){
  return NextResponse.json({ response:"movie already created" }); 
}else{
 
  const movieCreated = await prisma.movies.create({
    data:{
      movieURL:movieURL,
      movieDescription:movieDescription,
      newAuthor:{
        connect:{
            id:usersId
        }
      }
    }
  })

  return NextResponse.json({message:"Movie created successfully" , response:movieCreated });
}


    } catch {
    return NextResponse.json({ response: "server error" });
  }
}
