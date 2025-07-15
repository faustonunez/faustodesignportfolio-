// components/menu-modal.tsx
import { NavLink, useNavigate } from "react-router-dom";
import CloseIcon from "../assets/icon-close.svg?react";

interface MenuModalProps {
  onClose: () => void;
}

export function MenuModal({ onClose }: MenuModalProps) {
  const navigate = useNavigate();
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative ${
      isActive
        ? "text-light-text-dark"
        : "text-light-text-dark hover:text-light-text-dark"
    } no-underline`;

  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose(); // close the modal first
    navigate({ pathname: "/", hash: "#work" });
  };

  return (
    <div className="w-svw h-full bg-custom p-20 z-50 top-0 backdrop-blur-md fixed">
      <CloseIcon
        className="fixed top-10 right-10 cursor-pointer"
        onClick={onClose}
      />
      <ul className="flex flex-col justify-center gap-12 font-playfair items-center text-5xl">
        <li>
          <a
            href="#work"
            onClick={handleWorkClick}
            className={`nav-link-underline text-brand-secondary-100-text dark:text-white ${getNavLinkClass({ isActive: false })}`}
          >
            Work
          </a>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={onClose}
            className={({ isActive }) =>
              `${getNavLinkClass({ isActive })} nav-link-underline ${isActive ? "nav-link-active" : ""}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <a
            href="mailto:faustonunez01@gmail.com"
            onClick={onClose}
            className="nav-link-underline text-brand-secondary-100-text dark:text-white"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
