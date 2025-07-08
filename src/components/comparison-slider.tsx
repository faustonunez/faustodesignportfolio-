import React, { useRef, useState } from "react";
import JdpBeforeImg from "../assets/images/jdp/jdp-before-design.png";
import JdpAfterImg from "../assets/images/jdp/jdp-after-design.png";

const ComparisonSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  // Original image size → container ratio
  const origWidth = 727.23;
  const origHeight = 492.14;
  const paddingTop = (origHeight / origWidth) * 100; // ≈ 67.67%

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      let pos = ((clientX - rect.left) / rect.width) * 100;
      setSliderPos(Math.max(0, Math.min(100, pos)));
    }
  };

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const moveHandler = (ev: any) => handleDrag(ev);
    const upHandler = () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("touchmove", moveHandler);
      window.removeEventListener("mouseup", upHandler);
      window.removeEventListener("touchend", upHandler);
    };
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("touchmove", moveHandler);
    window.addEventListener("mouseup", upHandler);
    window.addEventListener("touchend", upHandler);
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 600,
        paddingTop: `${paddingTop}%`, // ← gives the div a 727.23×492.14 box
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <img
        src={JdpBeforeImg}
        alt="Before"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
      <img
        src={JdpAfterImg}
        alt="After"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
          display: "block",
          clipPath: `inset(0 0 0 ${sliderPos}%)`,
          transition: "clip-path 0.1s",
        }}
      />
      <div
        role="slider"
        aria-valuenow={sliderPos}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        style={{
          position: "absolute",
          top: 0,
          left: `${sliderPos}%`,
          transform: "translateX(-50%)",
          width: 4,
          height: "100%",
          background: "#fff",
          border: "1px solid #aaa",
          cursor: "ew-resize",
          zIndex: 2,
          boxShadow: "0 0 4px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 24,
            height: 24,
            background: "#fff",
            borderRadius: "50%",
            border: "1px solid #aaa",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            color: "#333",
            pointerEvents: "none",
          }}
        >
          ⇆
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
