import { NavLink } from "react-router-dom";
import CloseIcon from "../assets/icon-close.svg?react";

interface MenuModalProps {
  onClose: () => void;
}

export function MenuModal({ onClose }: MenuModalProps) {
  // Your existing code for NavLinkClass
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative ${isActive ? " text-light-text-dark" : "text-light-text-dark hover:text-light-text-dark"} no-underline`;

  return (
    <div className="w-svw h-full bg-custom p-20  z-50 top-0 backdrop-blur-md fixed  ">
      <CloseIcon
        className="fixed top-10 right-10 cursor-pointer"
        onClick={onClose}
      />
      <ul className="flex flex-col justify-center gap-12 font-playfair items-center text-5xl   ">
        <li>
          <NavLink
            to="/#work"
            className={({ isActive }) =>
              `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
            }
            onClick={onClose} // Add this line to each NavLink
          >
            <h3>Work</h3>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
            }
            onClick={onClose} // Add this line to each NavLink
          >
            <h3>About</h3>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="mailto:faustonunez01@gmail.com"
            className={({ isActive }) =>
              `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
            }
            onClick={onClose} // Add this line to each NavLink
          >
            <h3>Contact</h3>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
