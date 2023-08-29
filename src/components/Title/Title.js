import React from "react";
import { MainHolder, HolderTitle, LeftTitle, RightTitle } from "./TitleStyle";
import { VariantsBox } from "../variantsBox/VariantsBox";
export const Title = ({ titleOne, titleTwo }) => {
  return (
    <MainHolder>
      <HolderTitle>
        <div className="titleOne">{titleOne}</div>
        <div className="titleTwo">{titleTwo}</div>
      </HolderTitle>
    </MainHolder>
  );
};
