import React, { useState } from 'react'
import error from '../../assets/images/404.png'
export default function Notfound() {

  return <>
    <div className='w-1/2 my-13 mx-auto '>
      <img src={error} className='w-full' alt="error" />
    </div>

  </>
}
