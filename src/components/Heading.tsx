import React from 'react'
import { HeadingProps } from './type'

export const Heading = (props: HeadingProps) => {
  return (
    <div>
        <h2>
            {props.children}
        </h2>
    </div>
  )
}
