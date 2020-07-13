import React from "react"
import containerStyles from "../styles/container.module.css"
import { Link } from "gatsby"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Container({ children }) {
  return <div className={containerStyles.container}>
  <header>
  <h3><Link to="/">SP</Link></h3>
  <ul>
  <ListLink to="/">Home</ListLink>
  <ListLink to="/about/">About</ListLink>
  <ListLink to="/contact">Contact</ListLink>
  </ul>
  </header>
  {children}
  </div>
}
