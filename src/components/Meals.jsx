"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();

      if (data.meals) {
        setMeals(data.meals);
        setError(null);
      } else {
        setMeals([]);
        setError("No meals found");
      }
    } catch (error) {
      setError(error.message);
      setMeals([]);
    }
  };

  const handler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      loadData();
    }
  }, [search]);

  return (
    <div className="mt-12">
      <input
        className="p-4 outline-none border-transparent text-slate-900"
        onChange={handler}
        type="text"
        placeholder="search meals..."
      />
      <button className="bg-red-400 p-4">Search</button>
      <div className="mt-12">
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-3 gap-2">
          {meals.map((meal) => (
            <div key={meal?.idMeal} className="border-2 p-4">
              <Image
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                width={500}
                height={500}
              />
              <h6>{meal.strMeal}</h6>
              <p>{meal.strInstructions}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meals;
