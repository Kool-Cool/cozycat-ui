"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../../styles/accordion.css";

interface AnimatedAccordionProps {
  title: string;
  children: React.ReactNode;
}

const AnimatedAccordion: React.FC<AnimatedAccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div
        className="accordion-header"
        onClick={() => setIsOpen((p) => !p)}
      >
        <h3 className="accordion-title">{title}</h3>

        {/* 🐱 Cat (always rendered) */}
        <div className="cat-wrapper">
          <Image
            src="/assets/cat.png"
            alt="Cat"
            width={80}
            height={80}
            className={`cat ${isOpen ? "open" : ""}`}
          />
        </div>

        {/* 🧶 Yarn */}
        <div className="yarn-wrapper">
          <Image
            src="/assets/yarn.png"
            alt="Yarn Ball"
            width={36}
            height={36}
            className={`yarn ${isOpen ? "active" : ""}`}
          />
        </div>
      </div>

      <div className={`accordion-body ${isOpen ? "show" : ""}`}>
        <div className="accordion-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimatedAccordion;
