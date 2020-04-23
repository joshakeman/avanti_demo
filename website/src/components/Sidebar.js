import React from 'react'
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Sidebar = () => (

    <div>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase md-3">
                    Newsletter
                </CardTitle>
                    <Form>
                        <FormGroup>
                            <Input type="email" name="email" placeholder="your email address..." />
                        </FormGroup>
                    </Form>
                    <button className="btn btn-outline-success text-uppercase">
                        Subscribe
                    </button>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase md-3">
                    recent posts
                </CardTitle>
                <StaticQuery query={sidebarQuery} render={data => (
                    <div>
                        {data.allMarkdownRemark.edges.map(({node}) => (
                            <Card key={node.id}>
                                <Link to={node.fields.slug}>
                                    <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid}></Img>
                                </Link>
                                <CardBody>
                                    <CardTitle>
                                        <Link to={node.fields.slug}>
                                            {node.frontmatter.title}
                                        </Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                )}/>
            </CardBody>
        </Card>
   </div>
)

const sidebarQuery = graphql`
query{
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
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
        }
      }
    }
  }
`

export default Sidebar