import styles from "./styles.module.css";
import Meals from "@/components/Meals";
import React from "react";
export const metadata = {
  title: {
    absolute: "Meals",
  },
  description: "Meals Page",
};

const MealsPage = () => {
  return (
    <div className="p-12">
      <h1 className="text-3xl font-semibold text-red-400">Choose Your Meals</h1>
      <p className={styles.fontTomato}>
        Choose meals of your choice by searching....
      </p>
      <Meals />
    </div>
  );
};

export default MealsPage;
