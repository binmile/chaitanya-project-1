import React,{useState} from 'react'
import { arrayCounterState } from './type'

function HookCounter4() {
    const[items, setItems] = useState<arrayCounterState[]>([])

    const addItem = () => {
        setItems([ ...items,{
            id:items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }

  return (
    <div>
        <ul>
        <button onClick={addItem}>add a number  </button>
            {items.map(item => (
                    <li key={item.id}> {item.value} </li>
            ))}
        </ul>
      
    </div>
  )
}

export default HookCounter4
