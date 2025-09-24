import React, { useRef, useState } from "react";
import "./BeforeAfterSection.css";

const BeforeAfterSection = ({ title, beforeImg, afterImg }) => {
  const containerRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
    let pos = ((clientX - rect.left) / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  };

  return (
    <div className="ba-section">
      <h2 className="ba-title">{title}</h2>
      <div
        className="ba-slider-container"
        ref={containerRef}
        onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
        onMouseDown={handleMove}
        onTouchMove={handleMove}
        onTouchStart={handleMove}
      >
        <img src={beforeImg} alt={`${title} before`} className="ba-image" />
        <div
          className="ba-after-image"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
        >
          <img src={afterImg} alt={`${title} after`} className="ba-image" />
        </div>
        <div
          className="ba-slider-line"
          style={{ left: `${sliderPos}%` }}
          onMouseDown={handleMove}
          onTouchStart={handleMove}
        >
          <div className="ba-slider-button"></div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
