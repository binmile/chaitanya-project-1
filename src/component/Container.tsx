import React from 'react'
import { ContainerProps } from './type'


export const Container =( props: ContainerProps ) => {
  return (
    <div style={props.styles}>
        Text content goes here
    </div>
  )
}
