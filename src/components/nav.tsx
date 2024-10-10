import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/fausto-logo.svg?react";
import BurgerMenu from "../assets/icon-burger.svg?react";
import LinkedIn from "../assets/icon-linkedin.svg?react";
import Dribble from "../assets/icon-dribble.svg?react";
import { Button } from "../components/button.tsx";

export function Nav({ onBurgerMenuClick }) {
  const navigate = useNavigate();

  // Function to handle the "Work" link click
  const handleWorkClick = (e) => {
    e.preventDefault();
    navigate("/#work"); // Navigate to the homepage with a hash.

    // Use a small delay to ensure the page has navigated.
    setTimeout(() => {
      const workSection = document.getElementById("Work");
      if (workSection) {
        // Scroll to the element with smooth behavior
        const offset = 180;
        const elementPosition =
          workSection.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100); // Adjust the delay if necessary.
  };

  // Function to determine link active state
  const getNavLinkClass = ({ isActive }) =>
    `relative ${
      isActive
        ? "text-light-text-dark"
        : "text-light-text-dark hover:text-light-text-dark"
    } no-underline`;

  return (
    <div className="w-full bg-brand-primary-20 dark:bg-[#1b1d27] flex justify-center py-10 fixed top-0 z-50">
      <div className="responsive-width flex relative justify-between items-center">
        <div id="SocialMedia" className="flex justify-center">
          <LinkedIn className="dark:text-white text-brand-secondary-100-text" />
          <Dribble className="dark:text-white text-brand-secondary-100-text" />
        </div>
        <div
          id="Logo"
          className="absolute left-1/2 transform -translate-x-1/2 text-center"
        >
          <NavLink to="/">
            <Logo className="dark:text-white text-brand-secondary-100-text" />
          </NavLink>
        </div>
        <div id="Links" className="flex justify-center">
          <ul className="md:flex justify-between gap-4 font-roboto items-center hidden">
            <li>
              <a
                href="#work"
                onClick={handleWorkClick}
                className={`nav-link-underline text-brand-secondary-100-text  dark:text-white ${getNavLinkClass({ isActive: false })}`}
              >
                Work
              </a>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${getNavLinkClass({ isActive })} text-brand-secondary-100-text dark:text-white  nav-link-underline ${isActive ? "nav-link-active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
          <Button
            className="ml-10 md:flex hidden"
            label="Let's Connect!"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <div className="ml-10 items-center md:hidden flex">
            <div onClick={onBurgerMenuClick} className="cursor-pointer">
              <BurgerMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
