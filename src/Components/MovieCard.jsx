import React from 'react';
import StarRating from './StarRating.jsx';
import { Link } from 'react-router-dom';

const MovieCard = ({ film }) => {
    const { image, name, date, rating, desc } = film;

    return (
        <div className="container">
            <img className="poster" src={image} alt={name} />
            <h1>{name}</h1>
            <h2>{date}</h2>
            <StarRating rate={rating} />
            <div className="film-disc">
                <h2>Descripción</h2>
                <p>{desc}</p>
                <h1>
                    <Link to={`/Description/${name}`}>Más Información</Link>
                </h1>
            </div>
        </div>
    );
};

export default MovieCard;
