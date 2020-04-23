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
import BackgroundSection from '../components/BackgroundSection'
import '../sass_styles/index.scss'
import { Row, Col } from 'reactstrap'

const BlogLayout = ({ children, pageTitle }) => {
  console.log(children)
  return(
    <>
    <BlogHeader />
    <div className="blog-background">
      <div className="container" id="content">
      <h1 className="blog-header">Avanti Blog & News</h1>
      <h3 className="blog-sub-header">{pageTitle}</h3>
        <Row>
          <Col md="8">
            {children}
          </Col>
          <Col md="4">
            <Sidebar />
          </Col>
        </Row>
      </div>
      <div className="relative-wrapper">
        <BackgroundSection />
      </div>
    </div>
    <Footer />
    </>
  )
}  

export default BlogLayout
