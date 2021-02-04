import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navbar from './components/Navbar/wrapper'

const Header = ({ siteTitle }) => (
  <header className="bg-white shadow flex items-center px-6 h-16 space-x-8 w-100 justify-between">
    <div className="flex items-center space-x-8 h-full">
      <img className="w-8 h-8 m-0" alt="Logo" src="/gatsby-icon.png" />
      <Navbar />
    </div>
    <div className="space-x-4">
      <span>Search</span>
      <span>User</span>
      <span>Hearth</span>
      <span>Cart</span>
    </div>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <div className="">TEST</div>
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
