import { useState } from "react";

// project imports
import { Dropdown } from "../Dropdown/Dropdown";
import { Block } from "../Block/Block";

import "./block-dropdown.css"

const blockSections = [
  {
    title: "Servicios",
    class: "block__section-one",
    options: [
      "Analítica Digital e Inteligencia Artificial",
      "Canales digitales y Growth Haking",
      "Consultoría CRM",
      "Diseño de experiencia",
      "E-commerce",
      "Headhunting y Mentoring",
      "Marketing Automation",
      "Publicidad Digital",
    ],
  },
  {
    title: "Somos Neo",
    class: "block__section-two",
    options: [
      "Sobre nosotros",
      "Bolsa de trabajo",
      "Guia Bcorp",
    ],
  },
  {
    title: "Países",
    class: "block__section-three",
    options: [
      "Perú",
      "Colombia",
      "Chile",
      "México",
    ],
  },
  {
    title: "Recursos",
    class: "block__section-four",
    options: [
      "Blog",
      "Descargables",
      "Cursos Gratuitos",
      "Webinars",
    ],
  },
];

export const BlockDropdown = () => {
  const [currentDropdown, setCurrentDropdown] = useState(null);

  const handleSetDropdown = (position) => {
    setCurrentDropdown(position !== currentDropdown ? position : null);
  };

  return (
    <>
      <div className="blockdropdown__main-container--mobile">
        {blockSections.map((el, position) => (
          <Dropdown
            title={el.title}
            options={el.options}
            key={position}
            position={position}
            handleSetDropdown={handleSetDropdown}
            isOpened={currentDropdown === position}
          />
        ))}
      </div>

      <div className="blockdropdown__main-container--desktop">
        {blockSections.map((el,position) => (
          <Block
            key={position}
            title={el.title}
            options={el.options}
            blockClass={el.class}
          />
        ))}
      </div>
    </>
  );
};
