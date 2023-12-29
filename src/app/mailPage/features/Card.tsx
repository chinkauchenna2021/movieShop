'use client'

import React from 'react'
import CardHead from '../components/CardHead'
import CardBody from '../components/CardBody'
import CardFooter from '../components/CardFooter'

interface IImageProps{imageUrl:string , movieDescription:string}

const Card = (props:IImageProps)=> { 
  return (
    <main className='mt-4 w-fit h-fit border border-1 border-slate-200  hover:scale-105 cursor-pointer' style={{}}>
        <CardHead src={props.imageUrl} />
        <CardBody movieDescription={props.movieDescription} />
        <CardFooter/>
    </main>
  )
}

export default Card