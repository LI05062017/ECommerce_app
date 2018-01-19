import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as UserApi from './lib/userApi'
import $ from 'jquery'

class DataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null
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
          console.log(user, '****USER****')
          this.setState({user})
          return user
        }),
    loginUser: (email, password) =>
      UserApi.loginUser(email, password)
        .then(user => {
          console.log(user, 'USER****')
          this.setState({user})
          return user
        }),
    getUser: () =>
      UserApi.getUser()
        .then(user => {
          console.log(user, '**FOUND USER**')
          this.setState({user})
          return user
        }),
    logoutUser: () =>
      UserApi.logoutUser()
        .then(() => {
          this.setState({user: null})
        })
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
