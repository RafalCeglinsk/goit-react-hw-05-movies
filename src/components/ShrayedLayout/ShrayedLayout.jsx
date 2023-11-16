import { NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <nav className="LayoutNav">
        <NavLink className="LayoutNavItem" to="/">
          Home
        </NavLink>
        <NavLink className="LayoutNavItem" to="/movies">
          Movies
        </NavLink>
      </nav>
    </div>
  );
};
