import { NavLink } from "react-router-dom";
import "./ActiveLink.css";
const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? " nav-item  " : " ")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
