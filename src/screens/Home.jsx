import React from 'react'
import { LeftColumn } from './LeftColumn'
import { RightColumn } from './rightColumn'
import { CenterColumn } from './centerColumn'

export const Home = () => {
  return (
    <div className='home'>
        <LeftColumn/>
        <CenterColumn/>
        <RightColumn/>
    </div>
    
  )
}
