import { useState } from 'react';
import { Food } from '../data/foodData';

interface SearchProps {
  foods: Food[];
  onSelectFood: (food: Food | null) => void;
  isDarkMode: boolean;
}

export default function Search({ foods, onSelectFood, isDarkMode }: SearchProps) {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<Food[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 1) {
      const filteredFoods = foods.filter(food =>
        food.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredFoods.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (food: Food) => {
    setSearch(food.name);
    setSuggestions([]);
    onSelectFood(food);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search for a food"
        className={`w-full p-2 border rounded ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-gray-800'}`}
      />
      {suggestions.length > 0 && (
        <ul className={`absolute w-full border rounded mt-1 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
          {suggestions.map((food) => (
            <li
              key={food.name}
              onClick={() => handleSelect(food)}
              className={`p-2 cursor-pointer ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}
            >
              {food.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}