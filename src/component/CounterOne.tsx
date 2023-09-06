import React,{useReducer} from 'react'

type State = number;
type Action = 'increment' | 'decrement' | 'reset';


const initialState = 0
const reducer = (state:State,action:Action) => {
    switch(action){
        case "increment": return state + 1
        case "decrement": return state - 1
        case "reset": return initialState
        default: return state
    }
}


function CounterOne() {

   const[count,dispatch]= useReducer(reducer, initialState)

  return (
      <div>
        <div>Count-{count}</div>
          <button onClick={()=>dispatch('increment')}>Increment</button>
          <button onClick={()=>dispatch('decrement')}>Decrement</button>
          <button onClick={()=>dispatch('reset')}>Reset</button>
      </div>
      )
}

export default CounterOne