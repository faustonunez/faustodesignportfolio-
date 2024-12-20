import { NavLink, useNavigate } from "react-router-dom";
import CloseIcon from "../assets/icon-close.svg?react";

interface MenuModalProps {
  onClose: () => void;
}

export function MenuModal({ onClose }: MenuModalProps) {
  // Your existing code for NavLinkClass
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative ${isActive ? " text-light-text-dark" : "text-light-text-dark hover:text-light-text-dark"} no-underline`;

  const navigate = useNavigate();

  // Function to handle the "Work" link click
  interface HandleWorkClickEvent {
    e: React.MouseEvent<HTMLAnchorElement>;
  }

  const handleWorkClick = (e: HandleWorkClickEvent["e"]): void => {
    e.preventDefault();
    navigate("/#work"); // Navigate to the homepage with a hash.

    // Use a small delay to ensure the page has navigated.
    setTimeout(() => {
      const workSection: HTMLElement | null = document.getElementById("Work");
      if (workSection) {
        // Scroll to the element with smooth behavior
        const offset: number = 180;
        const elementPosition: number =
          workSection.getBoundingClientRect().top + window.scrollY;
        const offsetPosition: number = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100); // Adjust the delay if necessary.
  };

  return (
    <div className="w-svw h-full bg-custom p-20  z-50 top-0 backdrop-blur-md fixed  ">
      <CloseIcon
        className="fixed top-10 right-10 cursor-pointer"
        onClick={onClose}
      />
      <ul className="flex flex-col justify-center gap-12 font-playfair items-center text-5xl   ">
        <li>
          <a
            href="#work"
            onClick={handleWorkClick}
            className={`nav-link-underline text-brand-secondary-100-text  dark:text-white ${getNavLinkClass({ isActive: false })}`}
          >
            <h3>Work</h3>
          </a>
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
