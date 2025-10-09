import React, { useState } from "react";

interface ImageModalProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  src,
  alt,
  className = "",
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    // Store current scroll position
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    setIsOpen(true);
  };

  const closeModal = () => {
    // Restore scroll position
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    setIsOpen(false);
  };

  // Close modal on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      {/* Clickable trigger */}
      <div className={`cursor-zoom-in ${className}`} onClick={openModal}>
        {children || <img src={src} alt={alt} className="w-full h-auto" />}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeModal}
        >
          {/* Modal content */}
          <div
            className="relative max-w-7xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-2xl font-bold z-10"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};
