import React from 'react'
import Typography from 'material-ui/Typography/Typography'
import Card from 'material-ui/Card'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

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

const LoginForm = ({onChangeHandler, id, onSubmit}) =>
  <form style={style.container}>

    <div style={style.card}>
      <Card style={style.cards} raised='true'>
        <Typography type='headline' component='h2'>
    Email:
        </Typography>
        <input style={style.input} onChange={onChangeHandler} type='email' id='email' />
      </Card>
    </div>

    <div style={style.card}>
      <Card style={style.cards} raised='true'>
        <Typography type='headline' component='h2'>
    Password:
        </Typography>
        <input style={style.input} onChange={onChangeHandler} type='password' id='password' />
      </Card>
    </div>

    <div style={style.button}>
      <Button raised onClick={onSubmit}> Login </Button>
      <Button raised >  <Link to='/sign-up'> Not Registerd? Sign Up </Link></Button>
    </div>

  </form>

LoginForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default LoginForm
