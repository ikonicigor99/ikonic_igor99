import React, { useState } from "react";
import { MainHolder, ProjectsDetailsContainer } from "./ProjectsScreenStyle";
import { projects } from "../../DummyData";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";
import { HashLink as Link } from "react-router-hash-link";
export const ProjectsScreen = () => {
  const project = localStorage.getItem("DOO MOZIS");
  const [activeClass, setActiveClass] = useState(project);
  const changeProject = (name) => {
    setActiveClass(name);
    localStorage.setItem("DOO MOZIS", name);
  };
  return (
    <MainHolder id="projectPage">
      <Title titleOne="Browse My Recent" titleTwo="Projects" />
      <ProjectsDetailsContainer>
        <div className="project-containers">
          {projects.map((item) => (
            <>
              <div className="project-container">
                <div className="article-container">
                  <img src={require("../../assets/" + [item.image])} />
                </div>
                <h2>{item.name}</h2>
                <div className="btn-container">
                  <Button type="transp" text="GitHub" />
                  <Button type="transp" text="Live Demo" url={item.url} />
                </div>
              </div>
            </>
          ))}
        </div>
      </ProjectsDetailsContainer>
      <Link to="#contactPage" className="toContactPage" smooth={true} />
    </MainHolder>
  );
};
