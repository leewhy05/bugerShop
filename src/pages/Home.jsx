import React from 'react'
import Hero from '../component/Hero'
import Design from '../component/Design'
import { useEffect } from 'react'

export const Home = () => {
  useEffect(()=>{
    document.title = 'Home | Page'
  })
  return (
    <div>
        <Design/>
        <Hero/>
    </div>
  )
}
