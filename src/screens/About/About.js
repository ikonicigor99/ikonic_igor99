import React from "react";
import {
  MainHolder,
  HolderAbout,
  AboutMe,
  MyImg,
  AboutDetailsContainer,
} from "./AboutStyle";
import { Title } from "../../components/Title/Title";
import experienceIcon from "../../assets/icons/experience.png";
import educationIcon from "../../assets/icons/education.png";
import { HashLink as Link } from "react-router-hash-link";
import { VariantsBox } from "../../components/variantsBox/VariantsBox";
export const About = () => {
  return (
    <MainHolder id="aboutPage">
      <VariantsBox>
        <HolderAbout>
          <Title titleOne="Get To Know More" titleTwo="About Me" />
          <AboutMe>
            <div>
              <MyImg />
            </div>
            <AboutDetailsContainer>
              <div className="about-containers">
                <div className="details-container">
                  <img src={experienceIcon} />
                  <h3>Experience</h3>
                  <p>1 year Frontend Development</p>
                </div>
                <div className="details-container">
                  <img src={educationIcon} />
                  <h3>Education</h3>
                  <p>
                    Higher Education Technical School of Professional Studies
                  </p>
                </div>
              </div>
              <div className="text-container">
                Willingness to work and learn new things, curiosity and
                readiness for teamwork are what I am prepared for and would like
                to share with the company that chooses me to be part of their
                team. As a junior, I have built a portfolio that demonstrates my
                current capabilities, and I would be delighted to share it with
                you.
              </div>{" "}
            </AboutDetailsContainer>
          </AboutMe>{" "}
          <Link to="#skillsPage" className="toExperiancePage" smooth={true} />
        </HolderAbout>
      </VariantsBox>
    </MainHolder>
  );
};
