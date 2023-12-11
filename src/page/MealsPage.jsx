import { useState } from "react";

const MealsPage = () => {
  // au chargement du composant, je créé un state
  // nommé meals, contenant par défaut null
  // le state est une sorte de BDD pour le composant
  // use state me retourne deux chose : la valeur
  // actuelle du state de meals, et une fonction pour la
  // modifier. La fonction permet en plus de recharger le composant

  // quand mon composant sera rechargé, il va d'abord
  // regarder si une donnée existe pour le state meals
  // si oui il va l'utiliser, sinon il utilisera la valeur null
  const [meals, setMeals] = useState(null);

  if (meals === null) {
    (async () => {
      const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      // quand les données sont récupérées depuis mon api
      // je stocke dans le state les données de l'api
      // ce qui force mon composant à être rechargé
      setMeals(await mealsResponse.json());
    })();
  }

  return (
    <div>
      {meals ? (
        <>
          {meals.meals.map((meal) => {
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
