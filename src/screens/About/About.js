import React from "react";
import { MainHolder, HolderAbout, AboutMe } from "./AboutStyle";
import { Title } from "../../components/Title/Title";
export const About = () => {
  return (
    <MainHolder>
      <HolderAbout>
        <Title type="leftTitle" title="About" className="leftTitle" />
        <AboutMe>
          <div>
            Willingness to work and learn new things, curiosity and readiness
            for teamwork are what I am prepared for and would like to share with
            the company that chooses me to be part of their team. As a junior, I
            have built a portfolio that demonstrates my current capabilities,
            and I would be delighted to share it with you.
          </div>
        </AboutMe>
      </HolderAbout>
    </MainHolder>
  );
};
