import React from "react"
import Header from "../components/header"
import Paragraph from "../components/paragraph"
import { Link } from "gatsby"
import Container from "../components/container"

export default function Home() {
  return (
    <Container>
    <Header headerText="My First Gatsby Project!"/>
    <Paragraph paragraphText="I'm learning GatsbyJS and this is my first gatsby project."/>
    <img src="https://source.unsplash.com/random/600x400" alt="" />
    </Container>
  )
}
