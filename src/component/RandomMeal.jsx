import { useContext } from "react";
import { MealsContext } from "../context/MealsContext";

const RandomMeal = () => {
  const meals = useContext(MealsContext);

  const randomMeal = meals[Math.floor(Math.random() * meals.length)];

  return (
    <section>
      <h2>Recette aléatoire : </h2>
      <article>
        <h3>{randomMeal.strMeal}</h3>
      </article>
    </section>
  );
};

export default RandomMeal;
