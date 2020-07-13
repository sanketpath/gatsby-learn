import React from "react"
import Header from "../components/header"
import Paragraph from "../components/paragraph"
import { Link } from "gatsby"
import Container from "../components/container"

export default function Contact() {
  return (
    <Container>
    <Header headerText="Contact"/>
    <Paragraph paragraphText="I'm currently building contact page. Meanwhile you can reach out to me on"/>
    <Link to="https://t.me/sanketpath" target="_blank">Telegram</Link>
    </Container>
  )
}
