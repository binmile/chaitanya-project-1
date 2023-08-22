import React from 'react'
import { ButtonProps } from './type'

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick = {(event) => props.handleClick(event,1)}>
        Click
      </button>
    </div>
  )
}
