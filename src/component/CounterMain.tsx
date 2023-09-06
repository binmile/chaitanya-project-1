import React,{useReducer} from 'react'
import CountercontextOne from './CountercontextOne';
import CountercontextTwo from './CountercontextTwo';
import CountercontextThree from './CountercontextThree';

export const CountContext = React.createContext<{
    countState: number;
    countDispatch: React.Dispatch<Action>;
  }>({ countState: 1, countDispatch: () => {} });

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


function CounterMain() {

    const[count, dispatch] = useReducer(reducer,initialState)

  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}> 

    
    <div>
        <div>
            Count-{count}
        </div>
        <CountercontextOne/>
        <CountercontextTwo/>
        <CountercontextThree/>
    </div>
    </CountContext.Provider>
  )
}

export default CounterMain