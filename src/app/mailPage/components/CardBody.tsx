import React from 'react'
import { wrapText } from '../hooks/wrapText'

interface IProps{
  movieDescription:string
}

function CardBody(props:IProps) {
const text = wrapText(props.movieDescription , 15)
  return (
    <div className='w-full h-fit lg:w-[200px]'>{text}</div>
  )
}

export default CardBody