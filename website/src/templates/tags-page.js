import React from "react"
import BlogLayout from "../components/blogLayout"
import SEO from "../components/seo"
import { Badge, Button } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'

const TagsPage = ( { pageContext }) => {
    const { tags, tagPostCounts } = pageContext
    return(
        <BlogLayout pageTitle="All topics">
            <SEO title="Tags" />
            <ul>
                {tags.map(tag => (
                    <li key={tag} style={{ marginBottom: `10px`}}>
                        <Button color="primary" href={`/tag/${slugify(tag)}`}>
                            {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
                        </Button>
                    </li>
                ))}
            </ul>
        </BlogLayout>
    )
}

export default TagsPage