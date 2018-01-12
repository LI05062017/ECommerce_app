import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

const ProductList = ({products, deleteProduct}) =>

  <div>
    {
      products.map(product => {
        return <ProductCard
          {...product}
          deleteProduct={deleteProduct}
        />
      })
    }
  </div>

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  deleteProduct: PropTypes.func.isRequired
}

export default ProductList
