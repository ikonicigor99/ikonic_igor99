import React from "react";
import { MainHolder, HolderSkills, Image } from "./SkillsStyle";
import { Title } from "../../components/Title/Title";
import image from "../../assets/Screenshot_1.png";
export const Skills = () => {
  return (
    <MainHolder>
      <HolderSkills>
        <Title title="Skills" />
        <Image>
          <img src={image} />
        </Image>
      </HolderSkills>
    </MainHolder>
  );
};
