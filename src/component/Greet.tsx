import React from 'react'
import { GreetProp } from './type'

export const Greet:React.FC<GreetProp> = (props) => {

  // destructuring props
  const {name,messageCount,isLoggedin}=props


  return (
    <div>
      <h1>
        {isLoggedin ? `hello ${name} !! You have ${messageCount} messages`:' Hello guest'}
      </h1>

    </div>
  )
}

