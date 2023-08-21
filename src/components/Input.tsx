import React from 'react'
import { InputProps } from './type'



export const Input = (props: InputProps) => {


    
  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
  )
}
