import React from 'react'
import Main from './Main'
import Footer from './Footer'
import Header from './header/Header'
// import PropTypes from 'prop-types'

const Layout = ({domainData}) => {
  return (
    <div>
      <Header />
      <Main
        domainData={domainData}
      />
      <Footer />

    </div>
  )
}

// Layout.propTypes = {
//   domainData: AppPropTypes.domainData
// }
export default Layout