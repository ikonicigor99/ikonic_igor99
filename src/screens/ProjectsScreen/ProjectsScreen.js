import React, { useState } from "react";
import {
  MainHolder,
  HolderProjects,
  Menu,
  HolderProject,
} from "./ProjectsScreenStyle";
import { projects } from "../../DammyData";
export const ProjectsScreen = () => {
  const project = localStorage.getItem("DOO MOZIS");
  const [activeClass, setActiveClass] = useState(project);
  const changeProject = (name) => {
    setActiveClass(name);
    localStorage.setItem("DOO MOZIS", name);
  };
  return (
    <MainHolder>
      <HolderProjects>
        {projects.map((item, index) => (
          <Menu key={index}>
            <div className="line" />
            <div
              onClick={() => changeProject(item.name)}
              className={activeClass === item.name ? "activeClass" : "option"}
            >
              {item.name}
            </div>
          </Menu>
        ))}
        <HolderProject></HolderProject>
      </HolderProjects>
    </MainHolder>
  );
};
