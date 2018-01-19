import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import LoginForm from './LoginForm'

class LoginContainer extends Component {
  state = {
    email: undefined,
    password: undefined
  }

 onChangeHandler = (e) => this.setState({ [e.target.id]: e.target.value })

 onSubmit = (e) => {
   e.preventDefault()
   console.log('LOGIN SUCCESS')
   this.props.domainData.loginUser(this.state.email, this.state.password)
     .then(() => this.props.history.push('/'))
     .catch(err => alert(err, Object.keys(err)))
 }

 render () {
   console.log(this.state.email, this.state.password)
   return (
     <LoginForm
       {...this.state}
       onChangeHandler={this.onChangeHandler}
       onSubmit={this.onSubmit}
     />
   )
 }
}

export default withRouter(LoginContainer)
