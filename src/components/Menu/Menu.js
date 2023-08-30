import React, { useState } from "react";
import { MainHolder, HolderMenu, HolderOptions } from "./MenuStyle";
import { MenuOption } from "../../DummyData";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
export const Menu = () => {
  // const page = localStorage.getItem("/");
  // const [activeClass, setActiveClass] = useState(page);
  // let navigate = useNavigate();
  // const changePage = (path) => {
  //   navigate(path);
  //   setActiveClass(path);
  //   localStorage.setItem("/", path);
  // };
  return (
    <MainHolder>
      <HolderMenu>
        {MenuOption.map((item, index) => (
          <HolderOptions key={index}>
            <Link className="options" key={index} to={item.href} smooth={true}>
              {item.option}
            </Link>
          </HolderOptions>
        ))}
      </HolderMenu>
    </MainHolder>
  );
};
