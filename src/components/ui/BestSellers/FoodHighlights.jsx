"use client";

import FoodsMobile from "./FoodsMobile";
import FoodsDesktop from "./FoodsDesktop";
import ChickenBurger from "../../../app/assets/best-sellers/chicken-burger.jpg";
import ItalianSpaghetti from "../../../app/assets/best-sellers/italian-spaghetti.jpg";
import PineappleMangoSmoothie from "../../../app/assets/best-sellers/pineapple-mango-smoothie.jpg";
import { useState } from "react";

export const bestSellers = [
  {
    id: 1,
    name: "Chicken Burger",
    image: ChickenBurger,

    description:
      "Crispy, juicy chicken packed in a soft bun with fresh crunch in every bite.",

    price: 120,
    tag: "Best Seller",

    ingredients: ["Chicken patty", "Lettuce", "Tomato", "Cheese", "Bun"],
    pairWith: "Pineapple Mango Smoothie",
    makingTime: "8–12 minutes",
  },
  {
    id: 2,
    name: "Italian Spaghetti",
    image: ItalianSpaghetti,

    description:
      "Rich, savory meat sauce over perfectly cooked pasta that feels like a warm, filling comfort meal.",

    price: 130,
    tag: "Most Ordered",

    ingredients: ["Pasta", "Tomato sauce", "Ground meat", "Cheese"],
    pairWith: "Iced Tea",
    makingTime: "10–15 minutes",
  },
  {
    id: 3,
    name: "Pineapple Mango Smoothie",
    image: PineappleMangoSmoothie,

    description:
      "Ice-cold tropical blend that’s sweet, refreshing, and instantly energizing.",

    price: 100,
    tag: "Customer Favorite",

    ingredients: ["Pineapple", "Mango", "Ice", "Milk"],
    pairWith: "Chicken Burger",
    makingTime: "3–6 minutes",
  },
];
const len = bestSellers.length;

export default function HighlightFoods() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  return (
    <div className="mt-10">
      <FoodsDesktop
        foods={bestSellers}
        flippedIndex={flippedIndex}
        setFlippedIndex={setFlippedIndex}
      />
      <FoodsMobile
        foods={bestSellers}
        flippedIndex={flippedIndex}
        setFlippedIndex={setFlippedIndex}
      />
    </div>
  );
}
