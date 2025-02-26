import { useState, useEffect } from "react";
import { LinkInline } from "../link/linkInline";
import classes from "./hero.module.css";

export const Hero = () => {
  const texts = [
    `Hola, I'm a senior product designer who loves creating experiences that are <span class="${classes.pink}">captivating</span>, 
     <span class="${classes.cyan}">user-centric</span> and <span class="${classes.orange}">accessible</span>.`,
    `Hola, I'm a senior product designer with a <span class="${classes.orange}">focus on design systems</span>, always ensuring accessibility and scalability.`,
    `Hola, I'm a senior product designer with experience <span class="${classes.pink}">leading design teams</span> who loves being organised and managing projects.`,
    `Hola, I'm a senior product designer with <span class="${classes.cyan}">9 years of experience</span> creating and developing digital products for startups and large companies.`,
    `Hola, I'm a senior product designer with a <span class="${classes.orange}">developer background</span> who loves learning new languages. Currently, I'm with <span class="${classes.pink}">React</span>.`,
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursorText, setShowCursorText] = useState(false);

  // Cargar estado guardado al montar el componente
  useEffect(() => {
    const savedIndex = localStorage.getItem("heroTextIndex");
    if (savedIndex !== null) {
      setTextIndex(parseInt(savedIndex, 10));
    }
  }, []);

  const handleClick = () => {
    const newIndex = (textIndex + 1) % texts.length;
    setTextIndex(newIndex);
    localStorage.setItem("heroTextIndex", String(newIndex)); // Guardar en localStorage
  };

  // Manejo de la posición del cursor y visibilidad del texto
  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX + 10, y: e.clientY + 10 });
    setShowCursorText(true);
  };

  const handleMouseLeave = () => {
    setShowCursorText(false);
  };

  return (
    <div className={classes.hero} >
      {/* Mensaje que sigue el cursor */}
      <small className={classes.cursorText} style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`, display: showCursorText ? "block" : "none" }}>
			Click me!
      </small>
      <h1 className={classes.clickable} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={handleClick} dangerouslySetInnerHTML={{ __html: texts[textIndex] }}/>
      <h5>
        Now, I am working at <LinkInline label={"GammaUX"} href={"https://www.gammaux.com/en/"} /> as a Senior Design System Designer 
		  for <LinkInline label={"HP"} href={"https://www.hp.com/us-en/home.html"} />.
      </h5>
    </div>
  );
};
