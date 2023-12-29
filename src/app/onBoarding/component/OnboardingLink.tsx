import React from 'react'
import Inputs from './Inputs'
import Link from 'next/link'

interface IBoardingLink{
  linkTitle:string,
  mainTitle:string,
  link:string
}


function OnboardingLink({linkTitle , mainTitle , link}:IBoardingLink) {
  return (
    <div className='flex space-x-3 justify-start'>
       {/* <Inputs type='checkbox' className='bg-orange-400' /> */}
       <div className='text-sm text-orange-300 h-[30px] flex items-center' >{mainTitle} <Link className='hover:underline text-red-500 px-1' href={link}>{linkTitle}</Link></div>

    </div>
  )
}

export default OnboardingLink