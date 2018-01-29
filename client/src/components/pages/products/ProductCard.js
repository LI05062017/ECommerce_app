import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'
const style = {
  card: {
    width: 345
  },
  media: {
    border: '1px solid black',
    height: 200
  },
  body: {
    margin: 5
  },
  catagory: {
    border: '1px solid black'
  }
}

const ProductCard = ({name, price, img, catagory, _id, deleteProduct, product, addItemToCart}) => {
  return (
    <div style={style.body}>
      <h3> {name} </h3>
      <img src={img} />
      <h4> {price} </h4>
      <h4 style={style.catagory}> {catagory} catagory </h4>
      <Button dense color='primary' onClick={() => deleteProduct(_id)}>Delete</Button>
      <Button raised color='primary'><Link to={`/product/${_id}`}> View </Link></Button>
      <Button dense color='primary' onClick={() => addItemToCart(_id)}>Add to Cart</Button> 
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
  img: PropTypes.object.isRequired,
  catagory: PropTypes.object.isRequired,
  _id: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
}

export default ProductCard
