import { Food } from '../data/foodData';
import NutritionBarChart from './NutritionBarChart';

interface CompareNutritionProps {
  food1: Food;
  food2: Food;
  weight1: number;
  weight2: number;
  isDarkMode: boolean;
}

export default function CompareNutrition({ food1, food2, weight1, weight2, isDarkMode }: CompareNutritionProps) {
  const calculateNutrition = (food: Food, weight: number, nutrient: string) => {
    const parts = nutrient.split('.');
    let value: number;

    if (parts.length === 2 && parts[0] === 'carbohydrates') {
      value = food.nutritionPer100g.carbohydrates[parts[1] as keyof typeof food.nutritionPer100g.carbohydrates];
    } else if (parts.length === 1) {
      if (nutrient in food.nutritionPer100g) {
        value = food.nutritionPer100g[nutrient as keyof typeof food.nutritionPer100g] as number;
      } else if (nutrient in food.nutritionPer100g.vitamins) {
        value = food.nutritionPer100g.vitamins[nutrient as keyof typeof food.nutritionPer100g.vitamins];
      } else if (nutrient in food.nutritionPer100g.minerals) {
        value = food.nutritionPer100g.minerals[nutrient as keyof typeof food.nutritionPer100g.minerals];
      } else {
        return '0.00';
      }
    } else {
      return '0.00';
    }

    const calculatedValue = (value * weight) / 100;
    return calculatedValue.toFixed(2);
  };

  const compareValues = (value1: string, value2: string, nutrient: string) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    if (isNaN(num1) || isNaN(num2)) return ['', ''];
    
    const betterHigher = ['protein', 'carbohydrates.fiber', 'vitaminC', 'vitaminB6', 'potassium', 'magnesium'];
    const betterLower = ['calories', 'carbohydrates.sugars', 'fat'];
    
    const greenClass = isDarkMode ? 'bg-green-800' : 'bg-green-200';
    const redClass = isDarkMode ? 'bg-red-800' : 'bg-red-200';
    
    if (betterHigher.includes(nutrient)) {
      return num1 > num2 ? [greenClass, redClass] : num1 < num2 ? [redClass, greenClass] : ['', ''];
    } else if (betterLower.includes(nutrient)) {
      return num1 < num2 ? [greenClass, redClass] : num1 > num2 ? [redClass, greenClass] : ['', ''];
    }
    return ['', ''];
  };

  const nutrients = [
    { name: 'calories', label: 'Calories', unit: 'kcal' },
    { name: 'protein', label: 'Protein', unit: 'g' },
    { name: 'carbohydrates.total', label: 'Total Carbohydrates', unit: 'g' },
    { name: 'carbohydrates.sugars', label: 'Sugars', unit: 'g' },
    { name: 'carbohydrates.fiber', label: 'Fiber', unit: 'g' },
    { name: 'carbohydrates.starch', label: 'Starch', unit: 'g' },
    { name: 'fat', label: 'Fat', unit: 'g' },
    { name: 'vitaminC', label: 'Vitamin C', unit: 'mg' },
    { name: 'vitaminB6', label: 'Vitamin B6', unit: 'mg' },
    { name: 'potassium', label: 'Potassium', unit: 'mg' },
    { name: 'magnesium', label: 'Magnesium', unit: 'mg' },
  ];

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-6">Nutritional Comparison</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <NutritionBarChart food={food1} isDarkMode={isDarkMode} />
        <NutritionBarChart food={food2} isDarkMode={isDarkMode} />
      </div>
      <h3 className="text-xl font-bold mb-4">Comparison Table</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Nutrient</th>
              <th className="text-left">{food1.name} ({weight1}g)</th>
              <th className="text-left">{food2.name} ({weight2}g)</th>
            </tr>
          </thead>
          <tbody>
            {nutrients.map(({ name, label, unit }) => {
              const value1 = calculateNutrition(food1, weight1, name);
              const value2 = calculateNutrition(food2, weight2, name);
              if (parseFloat(value1) === 0 && parseFloat(value2) === 0) return null;
              const [color1, color2] = compareValues(value1, value2, name);
              return (
                <tr key={name}>
                  <td className="py-1">{label}</td>
                  <td className={`py-1 ${color1}`}>{parseFloat(value1) > 0 ? `${value1}${unit}` : '-'}</td>
                  <td className={`py-1 ${color2}`}>{parseFloat(value2) > 0 ? `${value2}${unit}` : '-'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}