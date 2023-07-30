import React from 'react'
import { useSelector } from 'react-redux'


export const LeftColumn = () => {
  const count = useSelector( state => state.counter.value)
  const name = useSelector( state => state.counter.name)
  const product = useSelector( state => state.product)
  return (
    <div className='left'>
      {count}
      {name}<br/>
      {product.title}
      </div>
  )
}
