import React from "react";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
import { ProjectsScreen } from "../ProjectsScreen/ProjectsScreen";
import { ContactMe } from "../ContactMe/ContactMe";
import { Menu } from "../../components/Menu/Menu";
export const FirstScreen = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <ProjectsScreen />
      <ContactMe />
    </>
  );
};
