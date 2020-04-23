import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        background: file(relativePath: { eq: "wyoming_mountain_2_extra_cropped_white.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.background.childImageSharp.fluid
      return (
        // <BackgroundImage
        //   Tag="section"
        //   className={className}
        //   fluid={imageData}
        //   backgroundColor={`f2f2f2`}
        // >
        //   <h2>gatsby-background-image</h2>
        // </BackgroundImage>

        <Img
        fluid={imageData}
        fadeIn={false}
        />

      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 2000px;
  // background-position: bottom center;
  background-repeat: no-repeat;
  background-size: contain;
`

export default StyledBackgroundSection