import React from 'react'
import { graphql } from 'gatsby'

import BlogLayout from '../components/blogLayout'
import Post from '../components/Post'
import PaginationLinks from '../components/PaginationLinks'

const tagPosts = ({ data, pageContext }) => {

    const { tag } = pageContext
    const { totalCount } = data.allMarkdownRemark
    const pageHeader = `${totalCount} post${
        totalCount === 1 ? '' : 's'
    } tagged with "${tag}"`

    return(
        <BlogLayout pageTitle={pageHeader}>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <Post key={node.id}
                      slug={node.fields.slug}
                      title={node.frontmatter.title}
                      author={node.frontmatter.author}
                      date={node.frontmatter.date}
                      body={node.excerpt}
                      tags={node.frontmatter.tags}
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                      />
            ))}
        </BlogLayout>
    )
}

export default tagPosts

export const tagQuery = graphql`
    query($tag: String!){
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            filter: { frontmatter: {tags: { in: [$tag]}}}
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMM Do YYY")
                        author
                        tags
                        image{
                            childImageSharp{
                                fluid(maxWidth: 650, maxHeight: 371) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                fields{
                    slug
                }
                excerpt
            }
        }
    }
}
`