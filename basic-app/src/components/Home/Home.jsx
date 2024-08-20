import React from 'react'
import { Container } from 'react-bootstrap';


function Home() {

  const helloWorld = () => {
    console.log("Welcome to the home page")
  }
  return (
    <Container>
      <h1 className="">
        Investoseed Home Page
      </h1>
      <hr />
      <button className="btn btn-primary"
      onClick={(e) => helloWorld()}>Enter</button>

      

    </Container>
  )
}

export default Home