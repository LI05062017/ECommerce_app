import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'

const SignUpForm = () =>
  <form>
    <div>
      <Card>
        <Typography type='headline' component='h2'>
        First Name:
        </Typography>
        <input type='text' id='firstName' />
      </Card>
    </div>

    <div>
      <Card>
        <Typography type='headline' component='h2'>
        Last Name:
        </Typography>
        <input type='text' id='lastName' />
      </Card>
    </div>

    <div>
      <Card>
        <Typography type='headline' component='h2'>
        Email:
        </Typography>
        <input type='text' id='email' />
      </Card>
    </div>

    <div>
      <Button raised>
        <Link to='/'> Submit </Link>
      </Button>
    </div>

  </form>

export default SignUpForm
