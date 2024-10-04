import React from 'react'
import { Play } from 'lucide-react'
import { Movie } from '../types'

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onSelect }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="h-64 sm:h-80 overflow-hidden">
        <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => onSelect(movie)}
            className="bg-red-600 text-white py-2 px-4 rounded-full flex items-center justify-center flex-1 hover:bg-red-700 transition-colors duration-300"
          >
            <Play className="w-4 h-4 mr-2" />
            Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard