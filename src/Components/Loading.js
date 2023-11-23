import React from 'react'
import betterloading  from '../Components/betterloading.gif'

export default function Loading() {
  return (
    <div className='text-center'>
        <img src={betterloading} alt='loading'/>
      </div>
  )
}
