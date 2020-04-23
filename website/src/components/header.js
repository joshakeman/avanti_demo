import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className="navbar">
      <div className="header-logo-wrapper">
        <h1 className="title">
          <Link to="/" >
            Avanti
          </Link>
        </h1>
        <p className="title-subhead">
          The Digital Asset Bank
        </p>
      </div>
      <nav className="nav-menu">

      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
