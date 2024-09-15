interface Food {
  name: string;
  nutritionPer100g: {
    calories: number;
    protein: number;
    carbohydrates: {
      total: number;
      sugars: number;
      fiber: number;
      starch: number;
    };
    fat: number;
    vitamins: {
      vitaminC: number;
      vitaminB6: number;
      // Add more vitamins as needed
    };
    minerals: {
      potassium: number;
      magnesium: number;
      // Add more minerals as needed
    };
  };
}

const foodData: Food[] = [
  {
    name: "Potato",
    nutritionPer100g: {
      calories: 77,
      protein: 2,
      carbohydrates: {
        total: 17,
        sugars: 0.8,
        fiber: 2.2,
        starch: 14
      },
      fat: 0.1,
      vitamins: {
        vitaminC: 19.7,
        vitaminB6: 0.2,
      },
      minerals: {
        potassium: 421,
        magnesium: 23,
      },
    }
  },
  {
    name: "Onion",
    nutritionPer100g: {
      calories: 40,
      protein: 1.1,
      carbohydrates: {
        total: 9.3,
        sugars: 0.6,
        fiber: 2.6,
        starch: 6.1
      },
      fat: 0.1,
      vitamins: {
        vitaminC: 7.4,
        vitaminB6: 0.1,
      },
      minerals: {
        potassium: 146,
        magnesium: 10,
      },
    }
  },
  {
    name: "Carrot",
    nutritionPer100g: {
      calories: 41,
      protein: 0.9,
      carbohydrates: {
        total: 9.6,
        sugars: 1.7,
        fiber: 2.8,
        starch: 5.1
      },
      fat: 0.2,
      vitamins: {
        vitaminC: 5.9,
        vitaminB6: 0.1,
      },
      minerals: {
        potassium: 320,
        magnesium: 12,
      },
    }
  },
  {
    name: "Broccoli",
    nutritionPer100g: {
      calories: 34,
      protein: 2.8,
      carbohydrates: {
        total: 6.6,
        sugars: 1.3,
        fiber: 2.6,
        starch: 3.7
      },
      fat: 0.4,
      vitamins: {
        vitaminC: 89.2,
        vitaminB6: 0.2,
      },
      minerals: {
        potassium: 316,
        magnesium: 21,
      },
    }
  },
  {
    name: "Spinach",
    nutritionPer100g: {
      calories: 23,
      protein: 2.9,
      carbohydrates: {
        total: 3.6,
        sugars: 0.5,
        fiber: 2.2,
        starch: 1.9
      },
      fat: 0.4,
      vitamins: {
        vitaminC: 28.1,
        vitaminB6: 0.2,
      },
      minerals: {
        potassium: 558,
        magnesium: 79,
      },
    }
  },
  {
    name: "Bell Pepper",
    nutritionPer100g: {
      calories: 31,
      protein: 1,
      carbohydrates: {
        total: 6,
        sugars: 1.2,
        fiber: 2.5,
        starch: 2.3
      },
      fat: 0.3,
      vitamins: {
        vitaminC: 127.7,
        vitaminB6: 0.2,
      },
      minerals: {
        potassium: 211,
        magnesium: 10,
      },
    }
  },
  {
    name: "Cucumber",
    nutritionPer100g: {
      calories: 15,
      protein: 0.7,
      carbohydrates: {
        total: 3.6,
        sugars: 0.6,
        fiber: 0.6,
        starch: 3
      },
      fat: 0.1,
      vitamins: {
        vitaminC: 2.8,
        vitaminB6: 0.04,
      },
      minerals: {
        potassium: 147,
        magnesium: 13,
      },
    }
  },
  {
    name: "Pepper",
    nutritionPer100g: {
      calories: 40,
      protein: 2,
      carbohydrates: {
        total: 9,
        sugars: 1.2,
        fiber: 2.5,
        starch: 5.3
      },
      fat: 0.2,
      vitamins: {
        vitaminC: 80.4,
        vitaminB6: 0.3,
      },
      minerals: {
        potassium: 175,
        magnesium: 10,
      },
    }
  },
  {
    name: "Pickle",
    nutritionPer100g: {
      calories: 11,
      protein: 0.3,
      carbohydrates: {
        total: 2.3,
        sugars: 0.5,
        fiber: 0.5,
        starch: 1.3
      },
      fat: 0.2,
      vitamins: {
        vitaminC: 1.3,
        vitaminB6: 0.04,
      },
      minerals: {
        potassium: 83,
        magnesium: 6,
      },
    }
  },
  {
    name: "Cauliflower",
    nutritionPer100g: {
      calories: 25,
      protein: 1.9,
      carbohydrates: {
        total: 5,
        sugars: 1.2,
        fiber: 2.5,
        starch: 1.3
      },
      fat: 0.3,
      vitamins: {
        vitaminC: 48.2,
        vitaminB6: 0.2,
      },
      minerals: {
        potassium: 299,
        magnesium: 15,
      },
    }
  },
  {
    name: "Olive",
    nutritionPer100g: {
      calories: 115,
      protein: 0.8,
      carbohydrates: {
        total: 6,
        sugars: 0.6,
        fiber: 2.5,
        starch: 2.9
      },
      fat: 11,
      vitamins: {
        vitaminC: 0.9,
        vitaminB6: 0.01,
      },
      minerals: {
        potassium: 8,
        magnesium: 4,
      },
    }
  },
  {
    name: "Almond",
    nutritionPer100g: {
      calories: 579,
      protein: 21.2,
      carbohydrates: {
        total: 21.7,
        sugars: 2.5,
        fiber: 12.5,
        starch: 7.7
      },
      fat: 49.9,
      vitamins: {
        vitaminC: 0,
        vitaminB6: 0.1,
      },
      minerals: {
        potassium: 733,
        magnesium: 270,
      },
    }
  },
  {
    name: "Nut",
    nutritionPer100g: {
      calories: 607,
      protein: 15,
      carbohydrates: {
        total: 16,
        sugars: 1.5,
        fiber: 10.5,
        starch: 4.5
      },
      fat: 54,
      vitamins: {
        vitaminC: 1.1,
        vitaminB6: 0.3,
      },
      minerals: {
        potassium: 646,
        magnesium: 251,
      },
    }
  },
  {
    name: "Rice",
    nutritionPer100g: {
      calories: 130,
      protein: 2.7,
      carbohydrates: {
        total: 28,
        sugars: 0.6,
        fiber: 0.6,
        starch: 27.8
      },
      fat: 0.3,
      vitamins: {
        vitaminC: 0,
        vitaminB6: 0.1,
      },
      minerals: {
        potassium: 35,
        magnesium: 12,
      },
    }
  },
  {
    name: "Pasta",
    nutritionPer100g: {
      calories: 158,
      protein: 5.8,
      carbohydrates: {
        total: 31,
        sugars: 0.6,
        fiber: 2.5,
        starch: 28.9
      },
      fat: 0.9,
      vitamins: {
        vitaminC: 0,
        vitaminB6: 0.1,
      },
      minerals: {
        potassium: 58,
        magnesium: 18,
      },
    }
  },
  {
    name: "Emmental Cheese",
    nutritionPer100g: {
      calories: 380,
      protein: 29,
      carbohydrates: {
        total: 1.5,
        sugars: 0.6,
        fiber: 0,
        starch: 1.9
      },
      fat: 29,
      vitamins: {
        vitaminC: 0,
        vitaminB6: 0.1,
      },
      minerals: {
        potassium: 80,
        magnesium: 40,
      },
    }
  },
  {
    name: "Mozzarella",
    nutritionPer100g: {
      calories: 280,
      protein: 22,
      carbohydrates: {
        total: 2.2,
        sugars: 0.6,
        fiber: 0,
        starch: 1.6
      },
      fat: 22,
      vitamins: {
        vitaminC: 0,
        vitaminB6: 0.1,
      },
      minerals: {
        potassium: 76,
        magnesium: 20,
      },
    }
  },
  {
    name: "Basil",
    nutritionPer100g: {
      calories: 23,
      protein: 3.2,
      carbohydrates: {
        total: 2.7,
        sugars: 0.6,
        fiber: 1.5,
        starch: 1.6
      },
      fat: 0.6,
      vitamins: {
        vitaminC: 18,
        vitaminB6: 0.2,
      },
      minerals: {
        potassium: 295,
        magnesium: 64,
      },
    }
  },
  {
    name: "Tomato",
    nutritionPer100g: {
      calories: 18,
      protein: 0.9,
      carbohydrates: {
        total: 3.9,
        sugars: 1.2,
        fiber: 1.2,
        starch: 2.5
      },
      fat: 0.2,
      vitamins: {
        vitaminC: 14,
        vitaminB6: 0.08,
      },
      minerals: {
        potassium: 237,
        magnesium: 11,
      },
    }
  },
  {
    name: "Garlic",
    nutritionPer100g: {
      calories: 149,
      protein: 6.4,
      carbohydrates: {
        total: 33.1,
        sugars: 1.2,
        fiber: 2.5,
        starch: 29.4
      },
      fat: 0.5,
      vitamins: {
        vitaminC: 31.2,
        vitaminB6: 1.2,
      },
      minerals: {
        potassium: 401,
        magnesium: 25,
      },
    }
  },
  // Add 498 more foods here...
];

export default foodData;
export type { Food };