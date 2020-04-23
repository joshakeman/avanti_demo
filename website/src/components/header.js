import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className="navbar">
      <div className="header-logo-wrapper">
        <Link to="/" className="link">
          <h1 className="title">
              Avanti
          </h1>
          <p className="title-subhead">
            The Digital Asset Bank
          </p>
        </Link>
      </div>
      <nav className="nav-menu">
        <Link to="/about" className="menu-item">
          About
        </Link>
        <Link to="/our-team" className="menu-item">
          Our Team
        </Link>
        <Link to="/contact" className="menu-item">
          Contact
        </Link>
        <Link to="/blog" className="menu-item">
          Blog
        </Link>
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
