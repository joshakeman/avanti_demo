import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BackgroundSection from '../components/BackgroundSection'
import '../styles/home.css'
import Img from "gatsby-image"
import StyledLogo from '../components/logo'
import mountains from '../images/wyoming_mountain_2_extra_cropped.jpg'

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <div className="background">
      <div className="jumbo fade-in">
        <h2>
        Step into the new
        frontier of banking
        </h2>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <StyledLogo />
      </div>
      <div className="relative-wrapper">
        <BackgroundSection />
      </div>
    </div>
  </Layout>
)

export default IndexPage
