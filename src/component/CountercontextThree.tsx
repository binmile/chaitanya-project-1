import React, { useContext } from 'react'
import { CountContext } from './CounterMain'

type CountContextType = {
    countState: number;
    countDispatch: (action:'increment' | 'decrement' | 'reset') => void;
  };
function CountercontextOne() {

const countContext = useContext<CountContextType>(CountContext)

  return (
    <div>
        
          <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
          <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
          <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
      </div>
  )
}

export default CountercontextOne