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
      "Lorem ipsums",
      "Lorem ipsums",
      "Lorem ipsums",
      "Lorem ipsums",
      "Lorem ipsums",
      "Lorem ipsums",
      "Lorem ipsums",
      "Lorem ipsums",
    ],
  },
  {
    title: "Somos Neo",
    class: "block__section-two",
    options: [
      "Lorem ipsums",
      "Lorem ipsums",
      "Lorem ipsums",
    ],
  },
  {
    title: "Países",
    class: "block__section-three",
    options: [
      "Lorem ipsums",
      "Lorem ipsums",
      "Lorem ipsums",
      "Lorem ipsums",
    ],
  },
  {
    title: "Recursos",
    class: "block__section-four",
    options: [
      "Lorem ipsums",
      "Lorem ipsums",
      "Lorem ipsums",
      "Lorem ipsums",
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
