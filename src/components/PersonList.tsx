import React from 'react'
import { PersonListProps,PersonPropse } from './type'

// export const PersonList:React.FC<PersonListProps>= (props) => {
  export const PersonList:React.FC<PersonListProps>= (props:PersonListProps) => {
  return (
    <div>
        {props.names.map(({firstName,id,lastName}: PersonPropse) => {
          return (
            <h2 key={id} >{firstName}{lastName}</h2>
          )
        })}
    </div>
  )

  // return (
  //   <div>
  //       {props.names.map(name => {
  //         return (
  //           <h2 key={name.id} >{name.firstName}{name.lastName}</h2>
  //         )
  //       })}
  //   </div>
  // )
}
