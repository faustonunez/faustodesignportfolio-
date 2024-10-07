import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { ScrollToTop } from "./components/scrolltotop";

// Component Imports
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { MenuModal } from "./components/menu-modal";

// Page Components - Note the capitalization
import { Homepage } from "./pages/homepage";
import { People } from "./pages/people";
import { About } from "./pages/about";
import { Events } from "./pages/events";
import { Motion } from "./pages/motion";

function App() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const toggleMenuModal = () => setIsMenuModalOpen(!isMenuModalOpen);
  const closeMenuModal = () => setIsMenuModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className=" bg-brand-greys-0">
        <Nav onBurgerMenuClick={toggleMenuModal} />
        {isMenuModalOpen && <MenuModal onClose={closeMenuModal} />}
        {/* Routes for the pages */}
        <Routes>
          <Route path="/" element={<Homepage />} />{" "}
          {/* Set Homepage as default */}
          <Route path="/people" element={<People />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/motion" element={<Motion />} />
          {/* Redirect to Homepage if no match is found */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
