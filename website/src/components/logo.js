import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"

const Logo = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "avanti-logo.jpg" }) {
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
      const imageData = data.logo.childImageSharp.fluid
      return (
        <Img
        fluid={imageData}
        className={className}
        />
      )
    }}
  />
)

const StyledLogo = styled(Logo)`
  width: 30%;
  margin: 0 auto;
  opacity: 0.8;
`

export default StyledLogo