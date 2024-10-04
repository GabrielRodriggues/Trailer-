import React, { useState } from 'react'
import { Play, Info, X } from 'lucide-react'

const FeaturedMovie: React.FC = () => {
  const [showTrailer, setShowTrailer] = useState(false)

  return (
    <section className="relative h-[50vh] md:h-[70vh] lg:h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX1500.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">Inception</h2>
        <p className="text-sm md:text-lg mb-4 max-w-2xl">A thief who enters the dreams of others to steal secrets from their subconscious.</p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => setShowTrailer(true)}
            className="bg-red-600 text-white py-2 px-6 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Trailer
          </button>
          <button className="bg-gray-800 text-white py-2 px-6 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
            <Info className="w-5 h-5 mr-2" />
            More Info
          </button>
        </div>
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
              src="https://www.youtube.com/embed/YoHD9XEInc0" 
              title="Inception Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}

export default FeaturedMovie