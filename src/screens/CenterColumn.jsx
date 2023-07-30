import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,myName} from '../redux/slice'

export const CenterColumn = () => {
    const count = useSelector(state => state.counter.value)
    const name = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState({
        name: name.name,
        firstName: name.firstName
    })

     const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(myName({
            name: inputValue.name,
             firstName: inputValue.firstName
        }))
     }

    return (
        <div className='center'>
            <div>

                <span style={{
                    color:count%10 ===0?'red':count%5 ===0 ?"blue":count%1 ===0 ?"green":count%2 ===0 ?"blue":"pink"}}>{count}</span><br/>
                <span>{name.name}</span><br/>
                <span>{name.firstName}</span><br/>
                <span>{inputValue.name}</span><br/>
                <input type="text" value={inputValue.name} onChange={(e)=>setInputValue({...inputValue,name:e.target.value})} /><br/>
                <input type="text" value={inputValue.firstName} onChange={(e)=>setInputValue({...inputValue,firstName:e.target.value})} />
            </div>
            <br/>
            <button
                aria-label=""
                onClick={handleSubmit}
            >
                Change Name
            </button>
            <br/>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    )
}
