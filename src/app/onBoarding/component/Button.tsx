import React from 'react'

interface IButton extends React.ComponentPropsWithoutRef<"button">{
    buttonTitle : string
}

function Button({ buttonTitle , ...props }:IButton) {
  return <button {...props} >{buttonTitle}</button>
}

export default Button