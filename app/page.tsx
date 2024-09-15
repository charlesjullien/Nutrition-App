'use client';

import { useState, useEffect } from 'react';
import Search from './components/Search';
import FoodItem from './components/FoodItem';
import NutritionInfo from './components/NutritionInfo';
import CompareNutrition from './components/CompareNutrition';
import foodData, { Food } from './data/foodData';

export default function Home() {
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [compareFood, setCompareFood] = useState<Food | null>(null);
  const [weight1, setWeight1] = useState('');
  const [weight2, setWeight2] = useState('');
  const [showCompare, setShowCompare] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <main className={`min-h-screen p-4 sm:p-8 transition-colors duration-200 ease-in-out ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold">Food Nutrition Calculator 🍽️</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </div>
        <div className={`rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <Search foods={foodData} onSelectFood={setSelectedFood} isDarkMode={isDarkMode} />
          {selectedFood && (
            <FoodItem
              food={selectedFood}
              weight={weight1}
              onWeightChange={setWeight1}
              onCompareClick={() => setShowCompare(!showCompare)}
              showCompare={showCompare}
              isDarkMode={isDarkMode}
            />
          )}
        </div>
        {showCompare && (
          <div className={`rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <Search foods={foodData} onSelectFood={setCompareFood} isDarkMode={isDarkMode} />
            {compareFood && (
              <FoodItem
                food={compareFood}
                weight={weight2}
                onWeightChange={setWeight2}
                onCompareClick={() => {}}
                showCompare={false}
                isDarkMode={isDarkMode}
              />
            )}
          </div>
        )}
        {selectedFood && weight1 && (
          <div className={`rounded-lg shadow-lg p-4 sm:p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            {showCompare && compareFood && weight2 ? (
              <CompareNutrition 
                food1={selectedFood} 
                food2={compareFood} 
                weight1={parseFloat(weight1)} 
                weight2={parseFloat(weight2)}
                isDarkMode={isDarkMode}
              />
            ) : (
              <NutritionInfo food={selectedFood} weight={parseFloat(weight1)} isDarkMode={isDarkMode} />
            )}
          </div>
        )}
      </div>
    </main>
  );
}
