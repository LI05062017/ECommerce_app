import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import SignUpForm from './SignUpForm'

class SignUpContainer extends Component {
  state = {
    firstName: undefined,
    lastName: undefined,
    email: undefined
  }

  onChangeHandler = (e) => this.setState({ [e.target.id]: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    console.log('New USER')
    this.props.domainData.newUser(this.state)
      .then(() => this.props.history.push('/'))
      .catch(err => alert(err, Object.keys(err)))
  }

  render () {
    return (
      <SignUpForm
        {...this.state}
        onChangeHandler={this.onChangeHandler}
        onsubmit={this.onSubmit}

      />

    )
  }
}

export default withRouter(SignUpContainer)
