import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"

export default function MyFiles({ data }) {
  return (
    <Container>
      <div>
        <h1>My Site's Files (with GraphQL)</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
              <th>changeTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
                <td>{node.changeTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
          changeTime(fromNow: true)
        }
      }
    }
  }
`
