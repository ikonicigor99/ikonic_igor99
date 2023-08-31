import React from "react";
import {
  Experience,
  ExperienceDetailsContainer,
  AboutContainers,
  FrontendDetails,
  OtherDetails,
} from "./SkillsStyle";
import { Title } from "../../components/Title/Title";
import { skillsOne, skillsTwo } from "../../DummyData";
import { HashLink as Link } from "react-router-hash-link";
export const Skills = () => {
  return (
    <Experience id="skillsPage">
      <Title titleOne="Explore My" titleTwo="Experience" />
      <ExperienceDetailsContainer>
        <AboutContainers>
          <FrontendDetails>
            <div className="experience-sub-title">Frontend Development</div>
            <div className="article-frontend">
              {skillsOne.map((item) => (
                <article>
                  <img src={require("../../assets/icons/" + [item.img])} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.experience}</p>{" "}
                  </div>{" "}
                </article>
              ))}
            </div>
          </FrontendDetails>
          <OtherDetails>
            <div className="experience-sub-title">Other Skills</div>
            <div className="article-other">
              {skillsTwo.map((item) => (
                <article>
                  <img src={require("../../assets/icons/" + [item.img])} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.experience}</p>
                  </div>
                </article>
              ))}
            </div>
          </OtherDetails>
        </AboutContainers>
        <Link to="#projectPage" className="toProjectPage" smooth={true} />
      </ExperienceDetailsContainer>
    </Experience>
  );
};
