import React from 'react'

interface IInput extends React.ComponentPropsWithoutRef<"input"> {

}

function Inputs({...props}:IInput) {
  return  <input  {...props} />
}

export default Inputs