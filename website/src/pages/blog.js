import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PaginationLinks from '../components/PaginationLinks'
import BlogHeader from '../components/BlogHeader'

import Post from '../components/Post'
import "../sass_styles/index.scss"

const IndexPage = () => {
  const postsPerPage = 2
  let numberOfPages

return(
    <>
    <BlogHeader />
    <SEO title="Home" keywords={['akeman', 'developer', 'blog']} />
    <StaticQuery query={indexQuery} render={data => {
      numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
      return(
        <div>
          {data.allMarkdownRemark.edges.map(( { node} ) => (
            <Post 
            title={node.frontmatter.title} 
            author={node.frontmatter.author} 
            date={node.frontmatter.date} 
            slug={node.fields.slug} 
            body={node.excerpt}
            fluid={node.frontmatter.image.childImageSharp.fluid}
            tags={node.frontmatter.tags}
            />
          ))}
            <PaginationLinks currentPage={1} numberOfPages={numberOfPages}/>
        </div>
        )
      }} />
        <footer className="footer">
            <p>Contact Us: info@avantibank.com</p>
            <p>© {new Date().getFullYear()} Avanti Bank & Trust</p> 
        </footer>
        </>
)
}

const indexQuery = graphql`
  query{
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
      ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMM Do YYYY")
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
