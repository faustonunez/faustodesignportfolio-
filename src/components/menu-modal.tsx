import CloseIcon from "../assets/icon-close.svg?react";

interface MenuModalProps {
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export function MenuModal({ onClose, onNavigate }: MenuModalProps) {
  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    onNavigate("home"); // Navigate to the homepage

    // Close the modal
    onClose();

    // Use a small delay to ensure the page has navigated.
    setTimeout(() => {
      const workSection: HTMLElement | null = document.getElementById("Work");
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
            className="nav-link-underline text-brand-secondary-100-text dark:text-white"
          >
            <h3>Work</h3>
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => {
              onNavigate("about");
              onClose();
            }}
            className="nav-link-underline text-brand-secondary-100-text dark:text-white"
          >
            <h3>About</h3>
          </a>
        </li>
        <li>
          <a
            href="mailto:faustonunez01@gmail.com"
            onClick={onClose}
            className="nav-link-underline text-brand-secondary-100-text dark:text-white"
          >
            <h3>Contact</h3>
          </a>
        </li>
      </ul>
    </div>
  );
}
