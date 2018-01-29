import React from 'react'
import Main from './Main'
import Footer from './Footer'
import Header from './header/Header'
import PropTypes from 'prop-types'

const Layout = ({domainData}) => {
  return (
    <div>
      <Header domainData={domainData} />
      <Main
        domainData={domainData}
      />
      <Footer />

    </div>
  )
}

// Layout.propTypes = {
//   domainData: PropTypes.domainData.isRequired
// }
export default Layout
