import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
const MainLayout = () => {
  return (
    <>
      <div className="container">
        <nav>
          <NavLink to="/">Home</NavLink>&nbsp;
          <NavLink to="/products">Product</NavLink>&nbsp;
          <NavLink to="/about">About</NavLink>&nbsp;
        </nav>
        <div className="container">
          <Outlet />
        </div>
        <footer>-----------This is a footer-----------</footer>
      </div>
    </>
  );
};

export default MainLayout;

// import { NavLink, Outlet } from "react-router-dom";
