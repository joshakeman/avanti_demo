import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BackgroundSection from '../pages/home'
import '../styles/home.css'

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <div className="background">
      <div className="jumbo" id="test">
        <p>
        Step into the new <br></br>
        frontier of banking
        </p>
      </div>
      <div className="relative-wrapper">
        <BackgroundSection />
      </div>
    </div>
  </Layout>
)

export default IndexPage
