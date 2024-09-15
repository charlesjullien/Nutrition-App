import { useState } from 'react';
import { Food } from '../data/foodData';

interface FoodSearchProps {
  foods: Food[];
  onSelectFood: (food: Food | null) => void;
}

export default function FoodSearch({ foods, onSelectFood }: FoodSearchProps) {
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
        className="w-full p-2 border rounded"
      />
      {suggestions.length > 0 && (
        <ul className="absolute w-full bg-white border rounded mt-1">
          {suggestions.map((food) => (
            <li
              key={food.name}
              onClick={() => handleSelect(food)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {food.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}