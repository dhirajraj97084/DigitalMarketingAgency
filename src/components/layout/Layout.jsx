import React from 'react'
import Footer from '../footer/Footer'
import NavbarComponent from '../navbar/NavbarComponent'

function Layout({children}) {
  return (
    <div>
      <NavbarComponent/>
      <div className="content">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
