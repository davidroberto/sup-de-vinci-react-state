import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import MealsPage from "./page/MealsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meals" element={<MealsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
