import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const style = {
  container: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 20,
    margin: 10

  },
  card: {
    padding: 0,
    margin: 10
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cards: {
    padding: 20
  },
  input: {
    paddingRight: 20,
    paddingLeft: 20
  }
}

const SignUpForm = ({onChangeHandler, onSubmit}) =>
  <form style={style.container}>
    <div style={style.card}>
      <Card style={style.cards} raised='true' >
        <Typography type='headline' component='h2'>
        First Name:
        </Typography>
        <input style={style.input} onChange={onChangeHandler} type='text' id='firstName' />
      </Card>
    </div>

    <div style={style.card}>
      <Card style={style.cards} raised='true'>
        <Typography type='headline' component='h2'>
        Last Name:
        </Typography>
        <input style={style.input} onChange={onChangeHandler} type='text' id='lastName' />
      </Card>
    </div>

    <div style={style.card}>
      <Card style={style.cards} raised='true'>
        <Typography type='headline' component='h2'>
        Email:
        </Typography>
        <input style={style.input} onChange={onChangeHandler} type='text' id='email' />
      </Card>
    </div>

    <div style={style.button}>
      <Button raised>
        <Link to='/'> Submit </Link>
      </Button>
    </div>

    <div style={style.button}>
      <Button onClick={onSubmit} onChange={onChangeHandler} raised> Sign Up </Button>
      <Link to='/login'> Login </Link>
    </div>
  </form>

SignUpForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default SignUpForm
