import { useEffect, useState } from "react";
import Header from "../component/Header";
import LastThreeMeals from "../component/LastThreeMeals";
import RandomMeal from "../component/RandomMeal";
import { MealsContext } from "../context/MealsContext";

const HomePage = () => {
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

      {meals ? (
        <MealsContext.Provider value={meals}>
          <LastThreeMeals />
          <RandomMeal />
        </MealsContext.Provider>
      ) : (
        <p>En cours de chargement</p>
      )}
    </>
  );
};

export default HomePage;
