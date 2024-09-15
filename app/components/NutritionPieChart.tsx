import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Food } from '../data/foodData';

ChartJS.register(ArcElement, Tooltip, Legend);

interface NutritionPieChartProps {
  food: Food;
  weight: number;
  isDarkMode: boolean;
}

export default function NutritionPieChart({ food, weight, isDarkMode }: NutritionPieChartProps) {
  const calculateNutrition = (nutrient: keyof Food['nutritionPer100g']) => {
    return (food.nutritionPer100g[nutrient] * weight) / 100;
  };

  const data = {
    labels: ['Protein', 'Carbohydrates', 'Fat'],
    datasets: [
      {
        data: [
          calculateNutrition('protein'),
          calculateNutrition('carbohydrates'),
          calculateNutrition('fat'),
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          boxWidth: 12,
          font: {
            size: 10
          },
          color: isDarkMode ? 'white' : 'black'
        }
      },
      title: {
        display: true,
        text: `${food.name} (${weight}g)`,
        font: {
          size: 14
        },
        color: isDarkMode ? 'white' : 'black'
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw.toFixed(1);
            return `${label}: ${value}g`;
          }
        }
      },
    },
  };

  return (
    <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80">
      <Pie data={data} options={options} />
    </div>
  );
}