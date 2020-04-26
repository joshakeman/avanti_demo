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
import logo from '../images/avanti-logo.jpg'

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <div className="background">
      <div className="jumbo fade-in">
        <h2>
        Step into the new
        frontier of banking
        </h2>
        <p className="buffer">
        Serving as a compliant bridge to the US dollar payments system and a custodian of digital assets that can meet the strictest level of institutional standards. <br></br><br></br>
        Avanti is leading finance into its digital future.
        </p>
        {/* <StyledLogo /> */}
        <div style={{width: '100%', display:'flex', justifyContent:'center'}}>
          <img src={logo} style={{width:300, margin:'0 auto', opacity: '0.8'}} />
        </div>
      </div>
      <div className="relative-wrapper">
        <BackgroundSection />
      </div>
    </div>
  </Layout>
)

export default IndexPage
