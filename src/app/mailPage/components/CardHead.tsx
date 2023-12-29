import React from 'react'
import Image from 'next/image'

interface IImage extends React.ComponentPropsWithoutRef<"img">{
  
}

function CardHead({...props}:IImage) {
  return (
    <div className=''>
       <img {...props} className=' w-full h-full lg:w-[200px] lg:h-[250px]'/>
    </div>
  )
}

export default CardHead