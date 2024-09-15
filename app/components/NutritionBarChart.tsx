import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Food } from '../data/foodData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface NutritionBarChartProps {
  food: Food;
  isDarkMode: boolean;
}

export default function NutritionBarChart({ food, isDarkMode }: NutritionBarChartProps) {
  const calculatePercentage = (nutrient: 'protein' | 'fat' | 'carbohydrates') => {
    if (nutrient === 'carbohydrates') {
      return food.nutritionPer100g.carbohydrates.total;
    }
    return food.nutritionPer100g[nutrient];
  };

  const data = {
    labels: ['Protein', 'Carbohydrates', 'Fat'],
    datasets: [
      {
        label: 'Grams per 100g',
        data: [
          calculatePercentage('protein'),
          calculatePercentage('carbohydrates'),
          calculatePercentage('fat'),
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
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${food.name} (per 100g)`,
        font: {
          size: 14
        },
        color: isDarkMode ? 'white' : 'black'
      },
      tooltip: {
        callbacks: {
          label: function(context: { parsed: { x: number } }) {
            return `${context.parsed.x.toFixed(1)}g`;
          }
        }
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: isDarkMode ? 'white' : 'black',
          callback: function(value: number) {
            return `${value}g`;
          }
        },
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      },
      y: {
        ticks: {
          color: isDarkMode ? 'white' : 'black'
        },
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80">
      <Bar data={data} options={options} />
    </div>
  );
}