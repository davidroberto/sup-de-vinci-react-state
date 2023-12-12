import { useContext } from "react";
import { MealsContext } from "../context/MealsContext";

const LastThreeMeals = () => {
  const meals = useContext(MealsContext);

  const lastThreeMeals = meals.slice(-3);

  return (
    <section>
      <h2>Les dernières recettes :</h2>

      {lastThreeMeals.map((meal) => {
        return (
          <article>
            <h3>{meal.strMeal}</h3>
          </article>
        );
      })}
    </section>
  );
};

export default LastThreeMeals;
