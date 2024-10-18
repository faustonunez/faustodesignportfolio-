import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import { ScrollToTop } from "./components/scrolltotop";

// Component Imports
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { MenuModal } from "./components/menu-modal";

// Page Components
import { Homepage } from "./pages/homepage";
import { People } from "./pages/people";
import { About } from "./pages/about";
import { VideoPlayer } from "./pages/videoplayer";
import { Motion } from "./pages/motion";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const toggleMenuModal = () => setIsMenuModalOpen(!isMenuModalOpen);
  const closeMenuModal = () => setIsMenuModalOpen(false);

  // Determine if the current route is '/videoplayer'
  const isDarkMode = location.pathname === "/videoplayer";

  return (
    <div className={`${isDarkMode ? "dark" : ""} bg-brand-greys-0`}>
      <Nav onBurgerMenuClick={toggleMenuModal} />
      {isMenuModalOpen && <MenuModal onClose={closeMenuModal} />}
      {/* Routes for the pages */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/people" element={<People />} />
        <Route path="/about" element={<About />} />
        <Route path="/videoplayer" element={<VideoPlayer />} />
        <Route path="/motion" element={<Motion />} />
        {/* Redirect to Homepage if no match is found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
