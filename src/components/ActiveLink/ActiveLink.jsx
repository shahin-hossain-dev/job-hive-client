import { NavLink } from "react-router-dom";
import "./ActiveLink.css";
const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? " nav-item text-[#33CC77]  "
          : "hover:text-[#33CC77] duration-300 "
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
