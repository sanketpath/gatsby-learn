import React from "react"
import { graphql, Link } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"
import Paragraph from "../components/paragraph"
import styles  from "../styles/container.module.css"
import containerStyles from "../styles/container.module.css"

export default function Blog({ data }){
  return(
  <Container>
  <Header headerText="Blogs" />
  <Paragraph paragraphText="Yay! I was able to fetch my blog articles with GraphQL and sort them in decending order!!!"/>
  {data.allMarkdownRemark.edges.map(({ node }) => (
    <Link to={node.fields.slug} style={{ display: `inherit`}}>
    <div key={node.id} class={containerStyles.article}>
    <h3 class={containerStyles.articleTitle}>{node.frontmatter.title}{""}</h3>
    <p style={{ color:`#3c3c3c` }}>{node.excerpt}</p>
    <span class={containerStyles.articleMetadata}>{node.frontmatter.date} | {node.timeToRead} min read</span>
    </div>
    </Link>
  ))}
  </Container>
)}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
