import React from "react";
import { MainHolder, HolderTitle, LeftTitle, RightTitle } from "./TitleStyle";
import { VariantsBox } from "../variantsBox/VariantsBox";
export const Title = ({ type, className, title }) => {
  return (
    <MainHolder>
      <HolderTitle>
        {type === "leftTitle" ? (
          <LeftTitle>
            <div className="lineLeft" />
            <div className="titleLeft">{title}</div>
          </LeftTitle>
        ) : (
          <RightTitle>
            <div className="lineRight" />
            <div className="titleRight">{title}</div>
          </RightTitle>
        )}
      </HolderTitle>
    </MainHolder>
  );
};
