import React from 'react'
import { PersonProps } from './type'



export const Person = (props:PersonProps) => {

    const {first,last} = props.name
    
  return (
    <div>{first}{last}</div>
  )
}
