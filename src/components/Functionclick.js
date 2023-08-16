import React from 'react'

export const 
Functionclick = () => {
    function clickHandler(){
        console.log("button clicked")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default Functionclick
