import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BlogLayout from "../components/blogLayout"
import SEO from "../components/seo"
import PaginationLinks from '../components/PaginationLinks'
import BlogHeader from '../components/BlogHeader'

import Post from '../components/Post'
import "../sass_styles/index.scss"

const IndexPage = () => {
  const postsPerPage = 2
  let numberOfPages

return (
    <BlogLayout>
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
      </BlogLayout>
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
