import React from 'react'
import PropTypes from 'prop-types'
import CartList from './CartList'

const CartContainer = ({domainData}) => {
  return (
    // console.log(domainData.user.cart)
    <div>
      {
        domainData.user != null
          ? <CartList cartProducts={domainData.user.cart} />
          : 'You must be logged in!'
      }
    </div>
  )
}
CartContainer.propTypes = {
  domainData: PropTypes.func.isRequired

}

export default CartContainer
