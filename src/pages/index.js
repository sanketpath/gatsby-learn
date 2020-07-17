import React from "react"
import Header from "../components/header"
import Paragraph from "../components/paragraph"
import Container from "../components/container"
import { graphql, Link } from "gatsby"
import containerStyles from "../styles/container.module.css"

export default function Home({ data }) {
  return (
    <Container>
    <div class={ containerStyles.main}>
    <img src="https://pbs.twimg.com/profile_images/1110933713850765312/jchktxX__400x400.jpg" alt="" style={{ width: `300px`, height:`300px`, marginBottom:`0`}} />
    <Header headerText="Sanket Pathak"/>
    <h3 style={{ fontWeight: `400`, color: `gray`}}>Product Designer, Postman</h3>
    <Paragraph paragraphText="I’m glad you stumbled upon my website. I’m revamping my entire website and have taken up a challenge to code it myself by using GatsbyJS. In fact, this page is built on the same. If you would like to know more about why I’m doing it? you can read about it here"/>
    <div>
    <button style={{margin:`0 0 12px 0`, color: `#ffffff !important` }}>Read my blog</button>
    </div>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <span style={{ fontSize: `14px`}} class={containerStyles.articleMetadata}>Last Published:{node.frontmatter.date}</span>
    ))}
    </div>
    </Container>
  )
}

// <button style={{ background:`white`, color:`#004498`, border:`1px solid #004498`, margin:`0 8px 12px 0` }}>Read about me</button>
export const query = graphql`
  {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 1, filter: {}) {
      edges {
        node {
          frontmatter {
            date(fromNow: true)
          }
          timeToRead
        }
      }
    }
  }
`
