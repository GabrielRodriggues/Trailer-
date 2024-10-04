import React from 'react'
import MovieCard from './MovieCard'
import { Movie } from '../types'

interface MovieListProps {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onSelectMovie }) => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">
        {movies.length > 0 ? 'Popular Movies' : 'No movies found'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onSelect={onSelectMovie} />
        ))}
      </div>
    </section>
  )
}

export default MovieList