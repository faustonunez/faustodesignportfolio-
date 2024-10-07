import { NavLink } from "react-router-dom";
import Logo from "../assets/fausto-logo.svg?react";
import BurgerMenu from "../assets/icon-burger.svg?react";
import LinkedIn from "../assets/icon-linkedin.svg?react";
import Dribble from "../assets/icon-dribble.svg?react";

export function Nav({ onBurgerMenuClick }) {
  // Function to determine link active state
  const getNavLinkClass = ({ isActive }) =>
    `relative ${isActive ? " text-light-text-dark" : "text-light-text-dark hover:text-light-text-dark"} no-underline`;

  return (
    <div className="w-full bg-brand-primary-20 flex justify-center py-10 fixed top-0 z-50">
      <div className=" responsive-width flex justify-between">
        <div className="flex justify-center">
          <LinkedIn />
          <Dribble />
        </div>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div className="flex justify-center ">
          <ul className="md:flex justify-between gap-4 font-roboto items-center hidden  ">
            <li>
              <NavLink
                to="/people"
                className={({ isActive }) =>
                  `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
                }
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-between ml-10 gap-4 items-center">
            <div onClick={onBurgerMenuClick} className="cursor-pointer">
              <BurgerMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
