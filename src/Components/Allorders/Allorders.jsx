
import { CartContext } from '../../Context/CartContext'
import React, { useEffect , useContext  } from 'react'
export default function Allorders() {
  let { clearCart } = useContext(CartContext)
  useEffect(() => {
    clearCart()
  }, []) 
  
  return (
    <div>All orders </div>
  )
}

