import React from 'react'
import NavItem from './NavItem'
import HeaderLink from './HeaderLink'
import PropTypes from 'prop-types'

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
const Header = ({domainData}) => {
  console.log(domainData, '******')
  return (
    <header>
      <nav style={style.container}>
        <NavItem exact to='/'> Home </NavItem>
        <NavItem to='/about'> About </NavItem>
        <NavItem to='/products'> Products </NavItem>
        <NavItem to='/add-product'> Add Products </NavItem>
        { domainData.loggedOut ? <NavItem to='sign-up'> Register </NavItem> : null }
        { domainData.loggedOut ? <NavItem to='/login'> Login </NavItem> : null }
        { domainData.loggedIn ? <HeaderLink onClick={domainData.logoutUser}> Log out </HeaderLink> : null}
        { domainData.loggedIn ? <HeaderLink> {domainData.user.local.email} </HeaderLink> : null}
        { domainData.loggedIn ? <NavItem to='/cart'> Cart </NavItem> : null }
      </nav>
    </header>
  )
}

Header.propTypes = {
  domainData: PropTypes.func.isRequired
}

export default Header
