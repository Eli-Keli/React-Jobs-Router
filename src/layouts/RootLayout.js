import { NavLink, Outlet } from "react-router-dom";
import Breadcrumps from "../components/Breadcrumps";

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>Job Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <Breadcrumps />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
