import React from "react"
import Header from "../components/header"
import Paragraph from "../components/paragraph"
import { Link } from "gatsby"
import Container from "../components/container"
import styles  from "../styles/about.module.css"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt=""  />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About(){
  return(
    <Container>
    <Header headerText="About me" />
    <Paragraph paragraphText="Alright! I've About page too!"/>
    <User
        username="Sanket Pathak"
        avatar="https://pbs.twimg.com/profile_images/1110933713850765312/jchktxX__400x400.jpg"
        excerpt="Product Designer at Postman"
      />
    </Container>
  )
}
