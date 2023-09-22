import style from "./NavLink.module.css";
import { NavLink } from "react-router-dom";
import { forwardRef } from "react";

const MyNavLink = forwardRef(({ children, link, className, onClick }, ref) => {
  return (
    <NavLink
      ref={ref}
      onClick={onClick}
      className={`${style.navLink} ${className}`}
      to={link}
    >
      {children}
    </NavLink>
  );
});

export default MyNavLink;
