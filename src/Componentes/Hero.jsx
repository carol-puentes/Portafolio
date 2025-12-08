import { useRef } from "react";
import '../css/Hero.css';

import izquierda from '../assets/derecha.png';
import derecha from '../assets/izquierda.png';

export default function Hero() {
  const wrapperRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const dividerRef = useRef(null);
  const handleRef = useRef(null);

  const setPosition = (percentage) => {
    leftRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    rightRef.current.style.clipPath = `inset(0 0 0 ${percentage}%)`;
    dividerRef.current.style.left = `${percentage}%`;
    handleRef.current.style.left = `${percentage}%`;
  };

  const onMove = (e) => {
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    const clamped = Math.min(100, Math.max(0, percentage));
    setPosition(clamped);
  };

  const onReset = () => {
    setPosition(50); // vuelve al centro
  };

  return (
    <div className="hero-container">
      <div
        className="image-wrapper"
        ref={wrapperRef}
        onMouseMove={onMove}
        onMouseLeave={onReset}      // cuando el mouse sale
        onTouchMove={(e) => onMove(e.touches[0])}
        onTouchEnd={onReset}        // cuando deja de tocar
      >
        <img
          ref={leftRef}
          src={izquierda}
          className="image image-left"
          alt="Izquierda"
        />

        <img
          ref={rightRef}
          src={derecha}
          className="image image-right"
          alt="Derecha"
        />

        <div ref={dividerRef} className="divider"></div>
        <div ref={handleRef} className="handle"></div>
      </div>

      <div className="hero-text left-text">
        Carol Stefania <br /> Puentes Motta
      </div>

      <div className="hero-text right-text">
        &lt;Desarrolladora/&gt;
      </div>
    </div>
  );
}
