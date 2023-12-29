'use client'

import React, { useEffect } from 'react'
import Header from './features/Header'
import Form from './features/Form'
import Card from './features/Card'
import useLocalStorage from 'use-local-storage'
import Link from 'next/link'
import { useRouter } from 'next/navigation'



function  MailPage() {
  const SAVE_MOVIE = "save_movie"
  const SET_SINGLE_MOVIE = "single_movie"
  const router = useRouter()
  const [movieSingle , setSingleMovie] = useLocalStorage(SET_SINGLE_MOVIE , "")
  const [movie , setMovie] = useLocalStorage(SAVE_MOVIE , "")
useEffect(()=>{

  (async()=>{

    let getMovieResponse = await fetch("http://localhost:3000/api/movieController")
  
  let resp = await getMovieResponse.json()
  setMovie(JSON.stringify(resp))
  

  
  })()

},[])

const navigatePages = (items:any , index:any)=>{
  const id = items.id ; 
  setSingleMovie(JSON.stringify(items))
   router.push(`/movies/${id}`)

}


  return (
    <main className="flex h-screen flex-col md:mx-auto my-3 w-fit pb-4">
         <Header /> 
          <Form />
          <div className='grid grid-cols-1 md:grid-cols-3 w-full' >
          
          {
            JSON.parse(movie).response.map((items:any , index:any)=>{
              return <div  onClick={()=>navigatePages(items, index)}><Card  imageUrl={items.movieURL} movieDescription={items.movieDescription} /></div>
            })
          }
            
          </div>
    </main>
  )
}

export default MailPage