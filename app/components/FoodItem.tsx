import { Food } from '../data/foodData';

interface FoodItemProps {
  food: Food;
  weight: string;
  onWeightChange: (weight: string) => void;
  onCompareClick: () => void;
  showCompare: boolean;
  isDarkMode: boolean;
}

export default function FoodItem({ food, weight, onWeightChange, onCompareClick, showCompare, isDarkMode }: FoodItemProps) {
  return (
    <div className="mt-4">
      <p className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        Food selected: {food.name} {getFoodEmoji(food.name)}
      </p>
      <div className="flex items-center">
        <input
          type="number"
          value={weight}
          onChange={(e) => onWeightChange(e.target.value)}
          placeholder="Enter weight in grams"
          className={`border p-2 rounded-l w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-gray-800'
          }`}
        />
        <button
          onClick={onCompareClick}
          className={`bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r transition duration-200 ease-in-out ${
            isDarkMode ? 'hover:bg-blue-700' : ''
          }`}
        >
          {showCompare ? 'Hide Compare' : 'Compare'}
        </button>
      </div>
    </div>
  );
}

function getFoodEmoji(foodName: string): string {
  const foodEmojis: { [key: string]: string } = {
    Potato: '🥔',
    Onion: '🧅',
    Carrot: '🥕',
    Broccoli: '🥦',
    Spinach: '🍃',
    'Bell Pepper': '🫑',
    Cucumber: '🥒',
    Pepper: '🌶️',
    Pickle: '🥒',
    Cauliflower: '🥬',
    Olive: '🫒',
    Almond: '🥜',
    Nut: '🌰',
    Rice: '🍚',
    Pasta: '🍝',
    'Emmental Cheese': '🧀',
    Mozzarella: '🧀',
    Basil: '🌿',
    Tomato: '🍅',
    Garlic: '🧄',
  };
  return foodEmojis[foodName] || '🍽️';
}