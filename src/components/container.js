import React from "react"
import containerStyles from "../styles/container.module.css"
import { useStaticQuery, graphql, Link } from "gatsby"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Container({ children }) {
  const data = useStaticQuery(graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

  return <div className={containerStyles.container}>
  <header style={{ marginBottom: `2rem`}}>
  <h3 style={{ display:`inline`}}><Link to="/">{data.site.siteMetadata.title}</Link></h3>
  <ul>
  <ListLink to="/">Home</ListLink>
  <ListLink to="/about/">About</ListLink>
  <ListLink to="/blog/">Blog</ListLink>
  <ListLink to="/contact">Contact</ListLink>
  </ul>
  </header>
  {children}
  </div>
}
