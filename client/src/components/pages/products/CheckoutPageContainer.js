import React from 'react'
import CheckoutList from './CheckoutList'
import PropTypes from 'prop-types'

const CheckoutPageContainer = ({domainData, showProductOrder}) => {
  return (
    <div>
      {
        domainData.user != null
          ? <CheckoutList
            showProductOrder={domainData.showProductOrder}
          />
          : 'No Items in Cart'
      }
    </div>
  )
}

CheckoutPageContainer.propTypes = {
  domainData: PropTypes.func.isRequired,
  showProductOrder: PropTypes.func.isRequired

}
export default CheckoutPageContainer
