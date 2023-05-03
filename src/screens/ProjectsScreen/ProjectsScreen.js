import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MainHolder,
  HolderMenu,
  Menu,
  HolderProject,
  Projects,
  HolderImage,
  HolderLinks,
  GitIcon,
  DomainIcon,
} from "./ProjectsScreenStyle";
import { projects } from "../../DammyData";
import dooMozis from "../../assets/Screenshot_3.png";
import smWeb from "../../assets/Screenshot_2.png";
import { VariantsBox } from "../../components/variantsBox/VariantsBox";
export const ProjectsScreen = () => {
  const project = localStorage.getItem("DOO MOZIS");
  const [activeClass, setActiveClass] = useState(project);

  const changeProject = (name) => {
    setActiveClass(name);
    localStorage.setItem("DOO MOZIS", name);
  };
  return (
    <VariantsBox>
      <MainHolder>
        <HolderMenu>
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
        </HolderMenu>
        <HolderProject>
          <Projects>
            <HolderImage>
              <img src={activeClass === "DOO MOZIS" ? dooMozis : smWeb} />
            </HolderImage>
            <HolderLinks>
              <div className="holderGitCard">
                <GitIcon />
                <Link className="gitLink" to="https://github.com/ikonicigor99">
                  https://github.com/ikonicigor99
                </Link>
              </div>
              <div className="vercelProject">
                <DomainIcon />
                {activeClass === "DOO MOZIS" ? (
                  <Link
                    className="domainLink"
                    to="https://doo-mozis.vercel.app/"
                  >
                    https://doo-mozis.vercel.app/
                  </Link>
                ) : (
                  <>
                    <Link className="domainLink" to="https://smweb.vercel.app/">
                      https://smweb.vercel.app/
                    </Link>
                  </>
                )}
              </div>
            </HolderLinks>
          </Projects>
        </HolderProject>
      </MainHolder>
    </VariantsBox>
  );
};
