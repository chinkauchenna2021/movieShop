import React from 'react'


interface  IButton extends React.ComponentPropsWithoutRef<"button">{
  text:string
} 


function FormButton({text , ...props }:IButton) {
  return <button  {...props} className='h-[33px] w-[100px]  border border-slate-400 rounded-sm  text-slate-700 hover:border-orange-300 transition-all tracking-wide' >{text}</button>
}

export default FormButton