import { NavLink, useLocation } from 'react-router-dom';

export const SharedLayout = () => {
  const location = useLocation();
  return (
    <div>
      <nav className="LayoutNav">
        <NavLink className="LayoutNavItem" to="/">
          Home
        </NavLink>
        <NavLink
          className="LayoutNavItem"
          to="/movies"
          state={{ from: location }}
        >
          Movies
        </NavLink>
      </nav>
    </div>
  );
};
