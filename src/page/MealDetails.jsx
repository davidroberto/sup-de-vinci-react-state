import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";

const MealDetails = () => {
  // je récupère dans l'url de la route liée à ce composant
  // le parametre id (la valeur actuelle de :id dans la route)
  const { id } = useParams();

  const [meal, setMeal] = useState(null);

  useEffect(() => {
    (async () => {
      // j'utilise l'id récupéré pour faire une recherche sur l'api
      // afin de récupérer la recette correspondant à l'id
      const mealResponse = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
      const mealResponseData = await mealResponse.json();
      setMeal(mealResponseData.meals[0]);
    })();
  }, []);

  return (
    <>
      <Header />
      <div>
        {meal ? (
          <article>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strInstructions}</p>
          </article>
        ) : (
          <p>En cours de chargement</p>
        )}
      </div>
    </>
  );
};

export default MealDetails;
