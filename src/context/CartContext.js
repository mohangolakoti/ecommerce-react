import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cartItems,setCartItems] = useState([])
  const [count,setCount] = useState(0)

  const addToCart = (item)=>{
    setCartItems([...cartItems,item])
  }

  const removeFromCart=(item)=>{
    setCartItems(cartItems.filter((it)=>it!==item))
  }

  return(
    <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
  );
};

export const useCart = ()=>{
    return useContext(CartContext)
}