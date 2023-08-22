import React,{useEffect, useState} from 'react'

// USEEFFECT

function HookCounterOne() {

const[count,setCount] = useState(0)
const[name, setName] = useState("")

useEffect(() => {
    console.log("useEffect - Update document title")
    document.title = `You clicked ${count} times`
},[count])

  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>      <button onClick={() => setCount(count+1) }>click {count+1} times</button>
    </div>
  )
}

export default HookCounterOne
