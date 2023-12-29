"use client"

import React, { useEffect, useState } from 'react'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import prisma from '../lib/prismaGlobal'
import { useRouter } from 'next/navigation'
import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useLocalStorage from 'use-local-storage'

interface IMovies{
  movieUrl:string,
  movieDescription:string

}
function Form() {
  const GET_USER_LOGIN = "get_users_Login"
  const [userLogin, setUserLogin] = useLocalStorage(GET_USER_LOGIN,"");

  const usersLocalStorageData = JSON.parse(userLogin);

  console.log(usersLocalStorageData)

  const router = useRouter();
    const [moviedata , setMoviedata] = useState({
      movieUrl:"",
      movieDescription:""
    }) 

// console.log(usersLocalStorageData.response.id)
const submitMovie =async (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  // if(moviedata.movieDescription == "" && moviedata.movieUrl == "") return; 
   try{


    let movieResponse = await fetch("http://localhost:3000/api/movieController",
    {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       // Add any additional headers if needed
     },
     body: JSON.stringify({movieURL:moviedata.movieUrl , movieDescription:moviedata.movieDescription ,usersId: usersLocalStorageData?.response.id}),
    }
    )
    
    let resp = await movieResponse.json()
    console.log(resp)
  if(resp.response.id != undefined){
      toast( resp.message) 
      window.location.reload();
  }else{
     console.log("log okay")
     toast("movie already created")
  }
  


   }catch(err){

    console.log(err)

   }



}


  return (
    <form action="" onSubmit={(e)=>submitMovie(e)}  className='flex flex-row py-5'>
         <FormInput name={"movieurl"} type='text' placeholder='Enter movie url' onChange={(e)=>setMoviedata((movie)=>({...movie , movieUrl:e.target.value}))} />
         <FormInput type='text' name={"moviedescription"}  placeholder='Enter description' onChange={(e)=>setMoviedata((movie)=>({...movie,movieDescription:e.target.value}))}   />
         <FormButton text="Create"/>
         < ToastContainer />
    </form>
  )
}

export default Form