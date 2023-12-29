'use client'

import React, { useEffect } from 'react'
import {  useRouter , useSearchParams , useParams } from 'next/navigation'
import useLocalStorage from 'use-local-storage'
import Image from 'next/image';

function SingleMovie() {
    const params = useParams();
    const id = params.id
    const SET_SINGLE_MOVIE = "single_movie"
    const [movieSingle , setSingleMovie] = useLocalStorage(SET_SINGLE_MOVIE , "")
    const movieOBJ = JSON.parse(movieSingle)
    console.log(movieSingle)
  return (

    <div className='w-full py-20 flex flex-col'>
        <span className='font-bold text-2xl text-orange-400 w-fit mx-auto py-16 tracking-wider'>Move Description</span>

    <div  className='flex flex-row w-4/6 h-[200px] mx-auto'>
         <div className='w-3/6'>
            <Image src={movieOBJ.movieURL} alt={''} width={300} height={150} />
         </div>
            <div className='text-wrap space-y-4 w-3/6' >
                  <div>
                   <span className='font-bold text-xl '>Description :</span> { movieOBJ.movieDescription}
                  </div>
                   <div>
                   <span className='font-bold text-xl '>Author :</span> { (movieOBJ.movieAuthorName == null)? "None" : movieOBJ.movieAuthorName }
                  </div>
                  <div>
                  <span className='font-bold text-xl '>Created Date :</span> {movieOBJ.createdAt}
                  </div>
            </div>
            </div>
    </div>
  )
}

export default SingleMovie