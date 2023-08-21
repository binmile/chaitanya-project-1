import React from 'react'
import { PersonProps } from './type'

// const Person: React.FC = ({ name, age, gender }) => {

export const Person:React.FC<PersonProps> = ({firstName,lastName}) => {

  return (
    <div>{firstName}{lastName}</div>
  )
}

// export const Person = ({name}:PersonProps) => {
//   const {firstName,lastName} = name
// return (
//   <div>{firstName}{lastName}</div>
// )
// }
