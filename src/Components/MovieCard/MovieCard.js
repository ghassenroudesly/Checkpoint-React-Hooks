import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from '../Rating/Rating'
import { Link } from 'react-router-dom';

import './MovieCard.css'

const MovieCard = ({ movie }) => {
    return (
        <div className="movieCard">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.img} alt={movie.title} className="movieImg" />
                <Card.Body className="cardText">
                    <Card.Title className="movieTitle">{movie.title}</Card.Title>
                    <Rating rating={movie.rating} />
                    <Link className="trailer" to={`MovieDetail/${movie.id}`}>Movies discription</Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
