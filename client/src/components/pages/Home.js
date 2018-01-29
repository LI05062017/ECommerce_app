import React from 'react'
import '../structure/style.css'

const style = {
  container: {
    fontFamily: 'Raleway'
  },
  img: {
    marginTop: '-50',
    paddingBottom: 5,
    width: '100%',
    height: '70%'
  },
  header: {
    fontSize: 40,
    textAlign: 'left'
    // display: 'flex',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
  cardOne: {
    border: '1px solid black',
    marginTop: 5,
    marginBottom: 5,
  },
  cardTwoBodyContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  miniCardOne: {
    marginRight: 5,
    marginLeft: 5,
    paddingRight: 50,
    paddingLeft: 50,
    border: '1px solid black',
  },
  miniCardTwo: {
    marginRight: 5,
    marginLeft: 5,
    paddingRight: 50,
    paddingLeft: 50,
    border: '1px solid black',
    backgroundColor: '',
  },
  miniCardThree: {
    marginRight: 5,
    marginLeft: 5,
    paddingRight: 50,
    paddingLeft: 50,
    border: '1px solid black',
    backgroundColor: '',
  }
}

const Home = () =>
  <div style={style.container}>
    <div className='titleHome'>
      <header style={style.header}> SHOP.COM </header>
    </div>
    {/* <img style={style.img} src='https://mirchmedia.com/img/banner-eCommerce-Solutions.jpg' /> */}
    <div style={style.cardOne}>
      <p style={style.pOne}>WELCOME </p>
      <p> DSALDJ </p>
      <p> DSALDJ </p>
      <p> DSALDJ </p>
    </div>

    <div style={style.cardTwoBodyContainer}>

      <div style={style.miniCardOne} >
        <p style={style.pTwo}>WELCOME TO SHOP.COM </p>
        <p> DSALDJ </p>
        <p> DSALDJ </p>
      </div>

      <div style={style.miniCardTwo}>
        <p style={style.pThree}>WELCOME TO SHOP.COM </p>
        <p> DSALDJ </p>
        <p> DSALDJ </p>
      </div>
      <div style={style.miniCardThree}>
        <p style={style.pThree}>WELCOME TO SHOP.COM </p>
        <p> DSALDJ </p>
        <p> DSALDJ </p>
      </div>
    </div>

    <div style={style.cardOne}>
      <p style={style.pOne}>WELCOME </p>
      <p> DSALDJ </p>
      <p> DSALDJ </p>
      <p> DSALDJ </p>
    </div>
    <div style={style.cardTwoBodyContainer}>

      <div style={style.miniCardOne} >
        <p style={style.pTwo}>WELCOME TO SHOP.COM </p>
        <p> DSALDJ </p>
        <p> DSALDJ </p>
      </div>

      <div style={style.miniCardTwo}>
        <p style={style.pThree}>WELCOME TO SHOP.COM </p>
        <p> DSALDJ </p>
        <p> DSALDJ </p>
      </div>
      <div style={style.miniCardThree}>
        <p style={style.pThree}>WELCOME TO SHOP.COM </p>
        <p> DSALDJ </p>
        <p> DSALDJ </p>
      </div>
    </div>

  </div>

export default Home
