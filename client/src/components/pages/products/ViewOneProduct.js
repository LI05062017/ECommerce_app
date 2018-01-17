import React from 'react'
import PropTypes from 'prop-types'

const ViewOneProduct = ({product}) =>

  <div>
    <h1> {product.name} </h1>
   
  </div>

ViewOneProduct.proptTypes = {
  product: PropTypes.string.isRequired
}
export default ViewOneProduct
