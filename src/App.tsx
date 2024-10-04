import React, { useState } from 'react'
import { Film, User } from 'lucide-react'
import MovieList from './components/MovieList'
import FeaturedMovie from './components/FeaturedMovie'
import SearchBar from './components/SearchBar'
import MovieDetails from './components/MovieDetails'
import { Movie } from './types'

const movies: Movie[] = [
  { 
    id: 1, 
    title: 'Inception', 
    image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    trailerUrl: 'https://www.youtube.com/embed/YoHD9XEInc0',
    description: 'A thief who enters the dreams of others to steal secrets from their subconscious is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person\'s idea into a target\'s subconscious.',
    director: 'Christopher Nolan',
    year: 2010,
    rating: 8.8
  },
  { 
    id: 2, 
    title: 'The Shawshank Redemption', 
    image: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
    trailerUrl: 'https://www.youtube.com/embed/6hB3S9bIaco',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    director: 'Frank Darabont',
    year: 1994,
    rating: 9.3
  },
  { 
    id: 3, 
    title: 'The Dark Knight', 
    image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    trailerUrl: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    director: 'Christopher Nolan',
    year: 2008,
    rating: 9.0
  },
  { 
    id: 4, 
    title: 'Pulp Fiction', 
    image: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    trailerUrl: 'https://www.youtube.com/embed/s7EdQ4FqbhY',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    director: 'Quentin Tarantino',
    year: 1994,
    rating: 8.9
  },
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 shadow-md">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <Film className="w-8 h-8 mr-2 text-red-600" />
            <h1 className="text-2xl font-bold">CineStream</h1>
          </div>
          <nav className="mb-4 sm:mb-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">Movies</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors duration-300">TV Shows</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <SearchBar onSearch={setSearchTerm} />
            <User className="w-6 h-6 cursor-pointer hover:text-red-600 transition-colors duration-300" />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        ) : (
          <>
            <FeaturedMovie />
            <MovieList movies={filteredMovies} onSelectMovie={setSelectedMovie} />
          </>
        )}
      </main>
      <footer className="bg-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} CineStream. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App