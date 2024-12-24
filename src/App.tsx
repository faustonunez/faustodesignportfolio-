import { useState } from "react";

// Component Imports
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { MenuModal } from "./components/menu-modal";

// Page Components
import { Homepage } from "./pages/homepage";
import { People } from "./pages/people";
import { About } from "./pages/about";
import { VideoPlayer } from "./pages/videoplayer";
import { Test } from "./pages/test";
import { Warner } from "./pages/warner";
import { Motion } from "./pages/motion";
import { Buildbook } from "./pages/buildbook";
import { CloudEstate } from "./pages/cloudestate";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const toggleMenuModal = () => setIsMenuModalOpen(!isMenuModalOpen);
  const closeMenuModal = () => setIsMenuModalOpen(false);

  // Determine if dark mode is active
  const isDarkMode = [
    "videoplayer",
    "warner",
    "cloudestate",
    "buildbook",
  ].includes(currentPage);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Homepage />;
      case "people":
        return <People />;
      case "about":
        return <About />;
      case "videoplayer":
        return <VideoPlayer />;
      case "warner":
        return <Warner />;
      case "buildbook":
        return <Buildbook />;
      case "cloudestate":
        return <CloudEstate />;
      case "test":
        return <Test />;
      case "motion":
        return <Motion />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""} bg-brand-greys-0`}>
      <Nav onBurgerMenuClick={toggleMenuModal} onNavigate={setCurrentPage} />
      {isMenuModalOpen && <MenuModal onClose={closeMenuModal} />}
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
