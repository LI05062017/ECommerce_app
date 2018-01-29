import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as UserApi from './lib/userApi'
import $ from 'jquery'

class DataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null,
    cartReady: false
  }
  methods = {
    getAllProducts: () => {
      $.ajax({
        url: '/api/products',
        method: 'GET'
      }).done((response) => {
        console.log(response, 'Data Provider')
        this.setState({isLoaded: true, products: response.data})
      })
    },
    addProduct: (newProduct) => {
      $.ajax({
        url: '/api/products',
        method: 'POST',
        data: newProduct
      }).done((response) => {
        this.methods.getAllProducts()
      })
    },
    deleteProduct: (id) => {
      $.ajax({
        url: `/api/products/${id}`,
        method: 'DELETE'
      }).done((response) => {
        console.log('Delete Data Provider', response)
        this.methods.getAllProducts()
      })
    },
    newUser: (user) =>
      UserApi.signupUser(user)
        .then(user => {
          console.log(user)
          this.setState({user})
          return user
        }),
    loginUser: (email, password) =>
      UserApi.loginUser(email, password)
        .then(user => {
          this.methods.getUser(user)
          return user
        }),
    getUser: (user) =>
      UserApi.getUser(user._id)
        .then(foundUser => {
          console.log('FOUND USER', foundUser)
          this.setState({user: foundUser, cartReady: true})
          return user
        }),
    logoutUser: () =>
      UserApi.logoutUser()
        .then(() => {
          this.setState({user: null})
        }),
    addItemToCart: (productId) => {
      if (this.state.user != null) {
        $.ajax({
          url: `/api/users/cart/${this.state.user._id}`,
          method: 'PUT',
          data: {product_id: productId}
        }).done((response) => {
          this.methods.getUser(this.state.user)
        })
      } else {
        console.log('User not logged in')
      }
    },
    removeItemFromCart: (productId) => {
      if (this.state.user != null) {
        $.ajax({
          url: `/api/users/removeFromCart/${this.state.user._id}`,
          method: 'PUT',
          data: {product_id: productId}
        }).then((response) => {
          this.methods.getUser(this.state.user)
        }).catch((error) => {
          console.log('Could not remove item from cart', error)
        })
      } else {
        console.log('user must be logged in')
      }
    },
    showProductOrder: (objectId) => {
      console.log('showProductOrder is working!')
      if (this.state.user != null) {
        $.ajax({
          url: '/api/order',
          method: 'POST',
          data: objectId
        }).then((response) => {
          console.log('this is your order function!!')
          this.methods.getUser(this.state.user)
        }).catch((error) => {
          console.log('****could not get products***', error)
        })
      } else {
        console.log('user must be logged in')
      }
    }
  }
  componentDidMount () {
    this.methods.getAllProducts()
    // this.methods.getUser()
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods,
      loggedIn: this.state.user != null,
      loggedOut: this.state.user == null
    }
    console.log()
    return (
      this.state.isLoaded
        ? <Layout
          domainData={domainData}
        />
        : <div> '....Loading' </div>
    )
  }
}

export default DataProvider
