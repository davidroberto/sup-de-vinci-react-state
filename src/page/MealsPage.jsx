import { useEffect, useState } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";

const MealsPage = () => {
  const [meals, setMeals] = useState(null);

  useEffect(() => {
    (async () => {
      const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      const mealsResponseData = await mealsResponse.json();

      setMeals(mealsResponseData.meals);
    })();
  }, []);

  return (
    <>
      <Header />

      <div>
        {meals ? (
          <>
            {meals.map((meal) => {
              return (
                <article>
                  <p>{meal.strMeal}</p>
                  {/* je génère un lien pour chaque recette, 
                  pointant vers la page de détail, en insérant le vrai id
                  de la recette à la place du parametre :id */}
                  <Link to={`/meal/details/${meal.idMeal}`}>Voir la recette</Link>
                </article>
              );
            })}
          </>
        ) : (
          <p>Recettes en cours de récupération</p>
        )}
      </div>
    </>
  );
};

export default MealsPage;
