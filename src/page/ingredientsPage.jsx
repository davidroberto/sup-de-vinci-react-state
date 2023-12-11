import { useEffect, useState } from "react";

const IngredientsPage = () => {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    (async () => {
      const ingredientsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
      const ingredientsResponseData = await ingredientsResponse.json();

      setIngredients(ingredientsResponseData.meals);
    })();
  }, []);

  return (
    <section>
      {ingredients ? (
        <div>
          {ingredients.map((ingredient) => {
            return (
              <article>
                <h2>{ingredient.strIngredient}</h2>
              </article>
            );
          })}
        </div>
      ) : (
        <p>En cours de chargement</p>
      )}
    </section>
  );
};

export default IngredientsPage;
