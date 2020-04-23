import React from 'react'
import BlogLayout from '../components/blogLayout'
import SEO from '../components/seo'
import { Card, CardBody, CardSubtitle, Badge, } from 'reactstrap'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import { slugify } from '../util/utilityFunctions'

const SinglePost = ({ data, pageContext }) => {
    const post = data.markdownRemark.frontmatter

    const baseUrl = 'http://localhost:8000/'

    return(
        <BlogLayout pageTitle={post.title}>
            <SEO title={post.title}/>

                    <Card>
                        <Img className="card-image-top" fluid={post.image.childImageSharp.fluid} />
                        <CardBody>
                            <CardSubtitle>
                                <span className="text-info">{post.date}</span> by{' '}
                                <span className="text-info">{post.author}</span>
                            </CardSubtitle>
                            <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html }}/>
                            <ul className="post-tags">
                                {post.tags.map(tag => (
                                    <li key={tag}>
                                        <Link to={`/tag/${slugify(tag)}`}>
                                            <Badge color="primary">{tag}</Badge>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </CardBody>
                    </Card>
                    <h3 className="text-center">
                        Share this post
                    </h3>
                    <div className="text-center social-share-links">
                        <ul>
                            <li><a href={'https://www.twitter.com/share?url=' + baseUrl + pageContext.slug + '&text=' + post.title + '&via' + 'ruminorang'} className="twitter" targer="_blank" rel="noopener noreferrer">                        <i class="fab fa-twitter fa-2x"></i>    
</a></li>
                            <li><a href={'https://www.linkedin.com/shareArticle?url=' + baseUrl + pageContext.slug} className="twitter" targer="_blank" rel="noopener noreferrer">                        <i class="fab fa-linkedin fa-2x"></i>    
</a></li>
                        </ul>
                    </div>
        </BlogLayout>
    )
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug }}) {
            id
            html
            frontmatter{
                title
                author
                date(formatString: "MMM Do YYYY")
                tags
                image {
                    childImageSharp{
                        fluid(maxWidth: 700){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
export default SinglePost