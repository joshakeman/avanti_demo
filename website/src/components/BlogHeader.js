import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/header.css'

const BlogHeader = ({ siteTitle }) => (
  <header>
    <div className="blog-navbar">
      <div className="header-logo-wrapper">
        <Link to="/" className="link">
          <h1 className="blog-title">
              Avanti
          </h1>
          <p className="blog-title-subhead">
            The Digital Asset Bank
          </p>
        </Link>
      </div>
      <nav className="blog-nav-menu">
        <Link to="/about" className="menu-item">
          About
        </Link>
        <Link to="/our-team" className="menu-item">
          Our Team
        </Link>
        <Link to="/contact" className="menu-item">
          Contact
        </Link>
      </nav>
    </div>
  </header>
)

BlogHeader.propTypes = {
  siteTitle: PropTypes.string,
}

BlogHeader.defaultProps = {
  siteTitle: ``,
}

export default BlogHeader
