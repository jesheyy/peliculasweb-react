import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
    return (
        <div>
            {movies.length === 0 ? (
                <div className="no-results">
                    <p>No se encontraron resultados</p>
                </div>
            ) : (
                <div className="flex-container">
                    {movies.map((movie, index) => (
                        <MovieCard key={index} film={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default MovieList;
