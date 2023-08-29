import React from "react-dom";
import { MainHolder, HolderHeader } from "./HeaderStyle";
import { Menu } from "../Menu/Menu";
import { VariantsBox } from "../variantsBox/VariantsBox";
export const Header = () => {
  return (
    <MainHolder>
      <VariantsBox>
        <HolderHeader>
          <div className="title">Igor Ikonić</div>
          {/* <Menu /> */}
        </HolderHeader>
      </VariantsBox>
    </MainHolder>
  );
};
