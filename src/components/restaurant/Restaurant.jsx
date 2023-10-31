import React from 'react'
import Pizza  from '../restaurant/Pizza.jsx';
import Onion from '../restaurant/Onion.jsx';
import Salad  from '../restaurant/Salad.jsx';
export default function Restaurant() {
  return (
   <>
   <div >
    <h1 className='text-center'>Pizza</h1>
    <Pizza/>
   </div>
   <div >
    <h1 className='text-center'>Onion</h1>
    <Onion/>
   </div>
   <div >
    <h1 className='text-center'>Salad</h1>
    <Salad/>
   </div>
   </>
  )
}
