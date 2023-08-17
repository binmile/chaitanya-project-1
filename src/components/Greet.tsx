import React from 'react'
import { GreetProp } from './type'

export const Greet = (props: GreetProp) => {
  return (
    <div>
        <h1>hello {props.name} !!</h1>
    </div>
  )
}

