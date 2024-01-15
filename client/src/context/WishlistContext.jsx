import React, { createContext, useEffect, useState } from 'react'

export const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist")?JSON.parse(localStorage.getItem("wishlist")):[])
    useEffect(() => {
      localStorage.setItem("wishlist",JSON.stringify(wishlist))
    }, [wishlist])
    
    const data = {

    }
  return (
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider