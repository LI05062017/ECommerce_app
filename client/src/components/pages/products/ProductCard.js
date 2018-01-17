import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography/Typography'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'
const style = {
  card: {
    width: 345
  },
  media: {
    border: '1px solid black',
    height: 200
  }
}

const ProductCard = ({name, price, img, catagory, _id, deleteProduct, product}) =>
  <div>
    
    <Card style={style.card}>
      <CardMedia
        style={style.media}
        title={catagory}
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCrnoqTXxQcS-tatFspCep9cOGTuvfC8j_FEthUP7l99Fl0TRag'
      />

      <CardContent>
        <Typography type='headline' component='h2' >
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button dense color='primary' onClick={() => deleteProduct(_id)}>Delete</Button>
        <Button raised color='primary'><Link to={`/product/${_id}`}> View </Link></Button>
      </CardActions>
  
    </Card>
  </div>

ProductCard.propTypes = {
  name: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
  img: PropTypes.object.isRequired,
  catagory: PropTypes.object.isRequired,
  _id: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired
}

export default ProductCard
