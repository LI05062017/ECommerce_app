import React from 'react'
import NavItem from './NavItem'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#020202',
    color: 'white'

  }
}
const Header = () => {
  return (
    <header>
      <nav style={style.container}>
        <NavItem exact to='/'> Home </NavItem>
        <NavItem to='/about'> About </NavItem>
        <NavItem to='/products'> Products </NavItem>
        <NavItem to='/add-product'> Add Products </NavItem>
      </nav>
    </header>
  )
}

export default Header
