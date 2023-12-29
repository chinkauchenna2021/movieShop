import React from 'react'

interface ITitle {
    title:string
}

function Title({title}:ITitle) {
  return (
    <div className='text-2xl text-orange-400 tracking-wider font-semibold pb-4'>{title}</div>
  )
}

export default Title