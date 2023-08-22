import React from 'react'
import { OscarProps } from './type'

export const Oscar = (props: OscarProps) => {
  return (
    <div>
       {props.children}
    </div>
  )
}
