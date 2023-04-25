import React, { useState } from "react";
import { MainHolder, HolderMenu, HolderOptions } from "./MenuStyle";
import { Menue } from "../../DammyData";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export const Menu = () => {
  const page = localStorage.getItem("/");
  const [activeClass, setActiveClass] = useState(page);
  let navigate = useNavigate();
  const changePage = (path) => {
    navigate(path);
    setActiveClass(path);
    localStorage.setItem("/", path);
  };
  return (
    <MainHolder>
      <HolderMenu>
        {Menue.map((item, index) => (
          <HolderOptions key={index}>
            <div
              className={activeClass === item.path ? "activeClass" : ""}
              onClick={() => changePage(item.path)}
            >
              {item.name}
            </div>
          </HolderOptions>
        ))}
      </HolderMenu>
    </MainHolder>
  );
};
