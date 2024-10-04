import React, { useState } from 'react'
import { Search } from 'lucide-react'

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    onSearch(term);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setSearchTerm('');
      onSearch('');
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center bg-gray-700 rounded-full px-3 py-2">
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search movies..."
          className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default SearchBar;