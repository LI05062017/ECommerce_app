import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import ProductsContainer from '../pages/products/ProductsContainer'
import AddProductContainer from '../pages/products/AddProductContainer'
import {Route} from 'react-router-dom'

const style = {
  container: {
    textAlign: 'center',
    padding: 100,
    backgroundColor: '#46cbe2'
  }
}

const Main = ({domainData}) =>

  <main style={style.container}>

    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/add-product' component={AddProductContainer} />
    <Route path='/products' render={() => <ProductsContainer domainData={domainData} />} />

  </main>

export default Main
