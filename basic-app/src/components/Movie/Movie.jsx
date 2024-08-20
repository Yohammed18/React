import React, { useState } from 'react'
import { Container } from 'react-bootstrap'


function Movie() {

    const [movie, setMovie] = useState({
        title: 'Rush Hour',
        ratings: 5,
        actors: ['Jackie Chan', 'Chris Tucker']
    })

    const rateChange = () => {
        setMovie({...movie, ratings: 4})
    }

  return (
    <Container>
        <h1>Movie</h1>
        <p>Title: {movie.title}</p>
        <p>Rating: {movie.ratings}</p>
        <p>Actors: {movie.actors[0]}, {movie.actors[1]}</p>
        <button className="btn btn-warning" onClick={rateChange}>Change Rating</button>
    </Container>
  )
}

export default Movie