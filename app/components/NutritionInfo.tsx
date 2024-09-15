import { Food } from '../data/foodData';
import NutritionBarChart from './NutritionBarChart';

interface NutritionInfoProps {
  food: Food;
  weight: number;
  isDarkMode: boolean;
}

export default function NutritionInfo({ food, weight, isDarkMode }: NutritionInfoProps) {
  const calculateNutrition = (nutrient: string) => {
    const parts = nutrient.split('.');
    let value: number;

    if (parts.length === 2 && parts[0] === 'carbohydrates') {
      value = food.nutritionPer100g.carbohydrates[parts[1] as keyof typeof food.nutritionPer100g.carbohydrates];
    } else if (parts.length === 1) {
      value = food.nutritionPer100g[nutrient as keyof typeof food.nutritionPer100g] as number;
    } else if (nutrient in food.nutritionPer100g.vitamins) {
      value = food.nutritionPer100g.vitamins[nutrient as keyof typeof food.nutritionPer100g.vitamins];
    } else {
      value = food.nutritionPer100g.minerals[nutrient as keyof typeof food.nutritionPer100g.minerals];
    }

    const calculatedValue = (value * weight) / 100;
    return calculatedValue.toFixed(2);
  };

  const renderNutrient = (label: string, nutrient: string, unit: string) => {
    const value = calculateNutrition(nutrient);
    return parseFloat(value) > 0 ? (
      <li key={nutrient}>{label}: {value}{unit}</li>
    ) : null;
  };

  const renderCarbohydrates = () => {
    const carbs = food.nutritionPer100g.carbohydrates;
    const carbEntries = Object.entries(carbs).filter(([, value]) => value > 0);
    
    if (carbEntries.length === 0) return null;

    return (
      <li>
        Carbohydrates:
        <ul className="ml-4">
          {carbEntries.map(([key, value]) => (
            <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {(value * weight / 100).toFixed(2)}g</li>
          ))}
        </ul>
      </li>
    );
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4">{food.name} ({weight}g)</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
          <ul className="mt-2">
            {renderNutrient('Calories', 'calories', ' kcal')}
            {renderNutrient('Protein', 'protein', 'g')}
            {renderCarbohydrates()}
            {renderNutrient('Fat', 'fat', 'g')}
            <li>Vitamins:</li>
            <ul className="ml-4">
              {renderNutrient('Vitamin C', 'vitaminC', 'mg')}
              {renderNutrient('Vitamin B6', 'vitaminB6', 'mg')}
            </ul>
            <li>Minerals:</li>
            <ul className="ml-4">
              {renderNutrient('Potassium', 'potassium', 'mg')}
              {renderNutrient('Magnesium', 'magnesium', 'mg')}
            </ul>
          </ul>
        </div>
        <div className="w-full md:w-1/2 md:pl-2">
          <NutritionBarChart food={food} isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}