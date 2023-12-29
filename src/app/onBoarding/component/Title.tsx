import React from 'react'

function Title({formtitle}:{formtitle:string}) {
  return (
    <div className='text-orange-400 text-2xl  font-lg tracking-wide w-full text-center h-[50px]'>{formtitle}</div>
  )
}

export default Title