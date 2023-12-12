import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import MealsPage from "./page/MealsPage";
import CategoriesPage from "./page/CategoriesPage";
import AreasPage from "./page/AreasPage";
import IngredientsPage from "./page/ingredientsPage";
import MealDetails from "./page/MealDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meals" element={<MealsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/areas" element={<AreasPage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
        <Route path="/meal/details/:id" element={<MealDetails />} />
        /meal/details/52977
      </Routes>
    </BrowserRouter>
  );
}

export default App;
