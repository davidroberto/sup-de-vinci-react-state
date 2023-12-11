import { useEffect, useState } from "react";

const MealsPage = () => {
  const [meals, setMeals] = useState(null);

  // use Effect permet d'executer une fonction
  // à certains rendus du composant
  // il prend en paramètre la fonction à executer
  // et en second parametre : quand elle doit être executée
  // si pas de second parametre : la fn sera executée à chaque chargement
  // du composant
  // si second parametre === tableau vide : la fn sera executée une seule fois
  // après le premier chargement du composant
  useEffect(() => {
    (async () => {
      const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      const mealsResponseData = await mealsResponse.json();

      setMeals(mealsResponseData.meals);
    })();
  }, []);

  return (
    <div>
      {meals ? (
        <>
          {meals.map((meal) => {
            return (
              <article>
                <p>{meal.strMeal}</p>
              </article>
            );
          })}
        </>
      ) : (
        <p>Recettes en cours de récupération</p>
      )}
    </div>
  );
};

export default MealsPage;
