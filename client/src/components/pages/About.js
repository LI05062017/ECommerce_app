import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

const style = {
  container: {
    backgroundColor: '#fc9ff7',
    padding: 100

  },
  h1: {
    padding: 20,
    letterSpacing: 4,
    fontFamily: 'Raleway'
  },
  about: {
    border: '4px solid black',
    borderRadius: 2,
    boxShadow: '10px 10px grey'
  }
}

const About = () => {
  return (
    <div style={style.container}>
      <Card>
        <div style={style.about}>
          <Typography style={style.h1}type='display1' gutterBottom=''>
             This is About!
          </Typography>
        </div>
      </Card>

    </div>
  )
}

export default About
