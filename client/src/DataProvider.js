import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import $ from 'jquery'
import * as UserApi from './lib/userApi'

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
        console.log(response, 'Product from data provider!!!')
        this.setState({ isLoaded: true, products: response.data })
      })
    },
    deleteProduct: (id) => {
      $.ajax({
        url: `/api/products/${id}`,
        method: 'DELETE'
      }).done((response) => {
        console.log(response, 'DELETE DATA!')
        this.methods.getAllProducts()
      })
    },
    newUser: (user) => {
      UserApi.signupUser(user)
        .then(user => {
          this.setState({user})
          return user
        })
    }
  }

  componentDidMount () {
    this.methods.getAllProducts()
  }
  render () {
    const domainData = {
      ...this.state,
      ...this.methods
    }
    return (
      this.state.isLoaded
        ? <Layout domainData={domainData} />
        : <div> ....Loading </div>

    )
  }
}

export default DataProvider
