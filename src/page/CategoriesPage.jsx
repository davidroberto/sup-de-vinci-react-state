import { useEffect, useState } from "react";

const CategoriesPage = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    (async () => {
      const categoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
      const categoriesResponseData = await categoriesResponse.json();

      setCategories(categoriesResponseData.categories);
    })();
  }, []);

  return (
    <section>
      {categories ? (
        <div>
          {categories.map((category) => {
            return (
              <article>
                <h2>{category.strCategory}</h2>
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

export default CategoriesPage;
