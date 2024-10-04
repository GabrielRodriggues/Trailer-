import React, { useState } from 'react'
import { X, Play, Star } from 'lucide-react'
import { Movie } from '../types'

interface MovieDetailsProps {
  movie: Movie;
  onClose: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onClose }) => {
  const [showTrailer, setShowTrailer] = useState(false)

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src={movie.image} alt={movie.title} className="w-full h-64 sm:h-96 object-cover" />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
          aria-label="Close details"
        >
          <X className="w-8 h-8" />
        </button>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
        <div className="flex items-center mb-4">
          <Star className="w-5 h-5 text-yellow-400 mr-1" />
          <span>{movie.rating}/10</span>
          <span className="mx-2">|</span>
          <span>{movie.year}</span>
          <span className="mx-2">|</span>
          <span>Director: {movie.director}</span>
        </div>
        <p className="text-gray-300 mb-6">{movie.description}</p>
        <button 
          onClick={() => setShowTrailer(true)}
          className="bg-red-600 text-white py-2 px-6 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
        >
          <Play className="w-5 h-5 mr-2" />
          Watch Trailer
        </button>
      </div>
      {showTrailer && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button 
              onClick={() => setShowTrailer(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              aria-label="Close trailer"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe 
              src={movie.trailerUrl}
              title={`${movie.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetails