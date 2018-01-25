import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import ProductsContainer from '../pages/products/ProductsContainer'
import AddProductContainer from '../pages/products/AddProductContainer'
import {Route} from 'react-router-dom'
import ViewProductContainer from '../pages/products/ViewProductContainer'
import SignUpContainer from '../pages/authentication/SignUpContainer'
import LoginContainer from '../pages/authentication/LoginContainer'
import CartContainer from '../pages/products/CartContainer'
import PropTypes from 'prop-types'

const style = {
  container: {
    textAlign: 'center',
    padding: 100,
    backgroundColor: '#46cbe2'
  }
}

const Main = ({ domainData }) =>

  <main style={style.container}>

    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/add-product' component={AddProductContainer} />
    <Route path='/products' render={() => <ProductsContainer domainData={domainData} />} />
    <Route exact path='/product/:productId' component={ViewProductContainer} />
    <Route path='/sign-up' render={() => <SignUpContainer domainData={domainData} />} />
    <Route path='/login' render={() => <LoginContainer domainData={domainData} />} />
    <Route path='/cart' render={() => <CartContainer domainData={domainData} />} />
  </main>

Main.propTypes = {
  domainData: PropTypes.func.isRequired
}

export default Main
