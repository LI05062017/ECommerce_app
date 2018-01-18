import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}

const ProductList = ({products, deleteProduct}) =>

  <div style={style.container}>
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
