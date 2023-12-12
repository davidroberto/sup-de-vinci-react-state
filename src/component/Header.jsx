import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/meals">Meals</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/ingredients">Ingredients</Link>
          </li>
          <li>
            <Link to="/areas">Areas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
