import React from 'react'
import { useSelector } from 'react-redux'

export const RightColumn = () => {
  const count = useSelector( state => state.counter.value)
  return (
    <div className='right'>
      {count}
      {count *10}
      </div>
  )
}
