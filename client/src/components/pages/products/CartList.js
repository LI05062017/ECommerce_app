import React from 'react'
import CartCard from './CartCard'
import PropTypes from 'prop-types'

const CartList = ({cartProducts, cartReady, removeItemFromCart}) => {
  return (
    <div>
      {
        cartReady
          ? cartProducts.map(product =>
            <CartCard p
              product={product}
              removeItemFromCart={removeItemFromCart}
            />
          )
          : 'Cart is Empty'
      }
    </div>
  )
}

CartList.propTypes = {
  cartProducts: PropTypes.object.isRequired,
  cartReady: PropTypes.bool.isRequired,
  removeItemFromCart: PropTypes.func.isRequired
}

export default CartList
