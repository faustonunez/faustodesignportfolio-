import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { MenuModal } from "./components/menu-modal";
import { useState } from "react";

function App({ children }: { children: React.ReactNode }) {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const toggleMenuModal = () => setIsMenuModalOpen(!isMenuModalOpen);
  const closeMenuModal = () => setIsMenuModalOpen(false);
  const handleNavigate = () => closeMenuModal();

  return (
    <div className="bg-brand-greys-0">
      <Nav onBurgerMenuClick={toggleMenuModal} onNavigate={handleNavigate} />
      {isMenuModalOpen && (
        <MenuModal onClose={closeMenuModal} onNavigate={handleNavigate} />
      )}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default App;
