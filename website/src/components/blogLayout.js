/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import BlogHeader from "./BlogHeader"
import Sidebar from './Sidebar'
import Footer from './Footer'
import '../sass_styles/index.scss'
import { Row, Col } from 'reactstrap'

const BlogLayout = ({ children }) => {
  console.log(children)
  return(
    <>
    <BlogHeader />
    <div className="container" id="content">
      <Row>
        <Col md="8">
          {children}
        </Col>
        <Col md="4">
          <Sidebar />
        </Col>
      </Row>
    </div>
    <Footer />
    </>
  )
}  

export default BlogLayout
