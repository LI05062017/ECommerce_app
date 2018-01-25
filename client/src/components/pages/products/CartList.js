import React from 'react'
import CartCard from './CartCard'

const CartList = ({cartProducts}) =>

  <div>
    {
      cartProducts.map(product =>
        <CartCard
          product={product}
        />
      )}

  </div>

export default CartList
