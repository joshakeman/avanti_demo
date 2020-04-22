import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div style={{margin: `0 auto`,maxWidth: 'auto',padding: `1.45rem 1.0875rem`,}}>
      <div>
        <h1 className="title">
          <Link to="/" >
            Avanti
          </Link>
        </h1>
        <p className="title-subhead">
          The Digital Asset Bank
        </p>
        </div>
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
