import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import { ScrollToTop } from "./components/scrolltotop";
import { GoogleAnalytics } from "./components/GoogleAnalytics"; // Add this import

// Component Imports
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { MenuModal } from "./components/menu-modal";

// Page Components
import { Homepage } from "./pages/homepage";
import { About } from "./pages/about";
import { VideoPlayer } from "./pages/videoplayer";
import { Warner } from "./pages/warner";
import { Buildbook } from "./pages/buildbook";
import { CloudEstate } from "./pages/cloudestate";
import { TheMuseJDP } from "./pages/themuse-JDP";
import { TheMuseMaya } from "./pages/themuse-Maya";
import { Sandbox } from "./pages/sandbox";

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

  // Add your Google Analytics tracking ID here
  const GA_TRACKING_ID = "G-M725NZBLQD"; // Replace with your actual tracking ID

  // list all the routes that should trigger dark mode
  const darkRoutes = [
    "/videoplayer",
    "/warner",
    "/cloudestate",
    "/buildbook",
    "/themuse-JDP",
    "/themuse-Maya",
  ];
  const isDarkMode = darkRoutes.includes(location.pathname);

  return (
    <div className={`${isDarkMode ? "dark" : ""} bg-brand-greys-0`}>
      <GoogleAnalytics trackingId={GA_TRACKING_ID} />
      <Nav onBurgerMenuClick={toggleMenuModal} />
      {isMenuModalOpen && <MenuModal onClose={closeMenuModal} />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/videoplayer" element={<VideoPlayer />} />
        <Route path="/warner" element={<Warner />} />
        <Route path="/buildbook" element={<Buildbook />} />
        <Route path="/cloudestate" element={<CloudEstate />} />
        <Route path="/themuse-JDP" element={<TheMuseJDP />} />
        <Route path="/themuse-Maya" element={<TheMuseMaya />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/sandbox" element={<Sandbox />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
