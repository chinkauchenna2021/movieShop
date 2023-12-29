import React from 'react'

interface IFormInput extends React.ComponentPropsWithRef<"input">{
}


function FormInput({...props}:IFormInput) {
  return <input {...props} className='h-[33px] outline-none border border-1  border-slate-400 px-2 mx-1 text-black' />
}

export default FormInput