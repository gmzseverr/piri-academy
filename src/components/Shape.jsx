import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Shape({ size = 36 }) {
  const shapeRef = useRef(null);

  useEffect(() => {
    gsap.to(shapeRef.current, {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "linear",
      transformOrigin: "center center",
    });
  }, []);

  const pixelSize = `${size}px`;

  return (
    <div
      style={{ width: pixelSize, height: pixelSize }}
      className="inline-flex items-center justify-center"
    >
      <div ref={shapeRef} className="w-full h-full">
        <section className="flex w-full h-1/2">
          <div className="w-1/2 h-full bg-amber-50 rounded-tr-full"></div>
          <div className="w-1/2 h-full bg-amber-50 rounded-br-full"></div>
        </section>
        <section className="flex w-full h-1/2">
          <div className="w-1/2 h-full bg-amber-50 rounded-tl-full"></div>
          <div className="w-1/2 h-full bg-amber-50 rounded-bl-full"></div>
        </section>
      </div>
    </div>
  );
}

export default Shape;
