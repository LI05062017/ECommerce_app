import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const style = {
  container: {
    border: '1px solid black'
  },
  body: '1px solid blue'
}

const CartCard = ({product, removeItemFromCart, showProductOrder, object}) => {
  return (
    <div style={style.container}>
      <h4>{product.name}</h4>
      <img src={product.img} />
      <p> {product.price} </p>

      <Button type='button' onClick={() => removeItemFromCart(product._id)} > Remove From Cart </Button>
      <Button type='button' onClick={() => showProductOrder(object._id)} > Proceed to Checkout </Button>
    </div>
  )
}

CartCard.propTypes = {
  product: PropTypes.object.isRequired,
  object: PropTypes.object.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  showProductOrder: PropTypes.func.isRequired
}

export default CartCard
