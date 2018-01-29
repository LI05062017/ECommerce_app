import React from 'react'
import NavItem from './NavItem'
import HeaderLink from './HeaderLink'
import PropTypes from 'prop-types'
// import Typography from 'material-ui/Typography'
// import Menu, {MenuItem} from 'material-ui/Menu'
// import Button from 'material-ui/Button'
// import DropDownMenu from 'material-ui/DropDownMenu'
// import MenuItem from 'material-ui/MenuItem'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    backgroundColor: 'white',
    borderBottom: '5px solid #46cbe2',
    borederTop: '5px solid grey'
    // width: 200

  },
  h1: {
    textDecoration: 'none',
    color: 'black',
    fontFamily: 'Raleway'
  }
}

// class Header extends Component {
// //   state ={
// //     anchorE1: null
// //   }

// //   handleClick = event => {
// //     this.setState({anchorE1: event.currentTarget})
// //   }
// //   handleClose = () => {
// //     this.setState({anchorE1: null})
// //   }

//   render () {
//     // const {anchorE1} = this.state
//     return (
//       <div>
//         <DropDownMenu>
//           <MenuItem primaryText='Home' />
//         </DropDownMenu>
//       </div>
//     )
//   }
// }

const Header = ({domainData}) => {
  console.log(domainData, '******')
  return (
    <header>
      <nav style={style.container}>
        <h1 style={style.h1}> Shop.com </h1>
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
