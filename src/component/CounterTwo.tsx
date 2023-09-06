import React,{useReducer} from 'react'

type State = { firstCounter: number,secondCounter: number };
type Action =
  | { type: 'increment'; value: number }
  | { type: 'decrement'; value: number }
  | { type: 'increment2'; value: number }
  | { type: 'decrement2'; value : number }
  | { type: 'reset' };

const initialState:State = {
    firstCounter:0,
    secondCounter:10
}
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'increment':
        return { ...state, firstCounter: state.firstCounter + (action.value !== undefined ? action.value : 1) };
      case 'decrement':
        return { ...state, firstCounter: state.firstCounter - (action.value !== undefined ? action.value : 1) };
    case 'increment2':
        return { ...state, secondCounter: state.secondCounter + (action.value !== undefined ? action.value : 1) };
    case 'decrement2':
        return {...state, secondCounter: state.secondCounter - (action.value !== undefined ? action.value : 1) };
      case 'reset':
        return initialState;
      default:
        return state;
    }
  };

function CounterTwo() {

   const[count,dispatch]= useReducer(reducer, initialState)

  return (
      <div>
        <div>Count-{count.firstCounter}</div>
        <div>Count-{count.secondCounter}</div>
          <button onClick={()=>dispatch({type:'increment',value:1}  )}>Increment</button>
          <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
          <button onClick={()=>dispatch({type:'increment',value:5}  )}>Increment 5</button>
          <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement</button>
          <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
          <button onClick={()=>dispatch({type:'increment2',value:5}  )}>Increment 2</button>
          <button onClick={()=>dispatch({type:'decrement2',value:5})}>Decrement 2</button>
      </div>
      )
}

export default CounterTwo