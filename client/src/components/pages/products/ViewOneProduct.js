import React from 'react'
import PropTypes from 'prop-types'

const ViewOneProduct = ({product}) =>

  <div>
    <h1> {product.name} </h1>
    <img src={product.img} />
    <p> {product.price} </p>
    <p> {product.catagory} </p>

   
  </div>

ViewOneProduct.proptTypes = {
  product: PropTypes.string.isRequired
}
export default ViewOneProduct
