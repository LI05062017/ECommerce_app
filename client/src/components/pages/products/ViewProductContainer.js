import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import $ from 'jquery'
import ViewOneProduct from './ViewOneProduct'

class ViewProductContainer extends Component {
  state={
    product: null
  }

  componentDidMount () {
    this.showUniqueProduct(this.props.match.params.productId)
  }
  showUniqueProduct = (id) => {
    $.ajax({
      url: `/api/products/${id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response, 'Successful One Item view!')
      this.setState({product: response.product})
    })
  }

  render () {
    return (
      <div>
        {
          this.state.product
            ? <ViewOneProduct product={this.state.product} image={this.state.image} />
            : 'Loading'
        }
      </div>
    )
  }
}

ViewProductContainer.propTypes = {
  match: PropTypes.func.isRequired,
  params: PropTypes.func.isRequired
}
export default withRouter(ViewProductContainer)
