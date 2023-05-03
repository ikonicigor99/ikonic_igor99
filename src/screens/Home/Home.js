import React from "react";
import {
  MainHolder,
  HolderHomeScreen,
  HomeContent,
  MyImage,
  MyIntroduction,
} from "./HomeStyle";
import { TitleAboutMe } from "../../DammyData";
import { VariantsBox } from "../../components/variantsBox/VariantsBox";
export const Home = () => {
  return (
    <MainHolder>
      <VariantsBox>
        <HolderHomeScreen>
          <HomeContent>
            <MyImage />
            <MyIntroduction>
              {TitleAboutMe.map((item, index) => (
                <div key={index}>
                  <div className="title">{item.title}</div>
                  <div className="desc">{item.description}</div>
                  <div className="line" />
                </div>
              ))}
            </MyIntroduction>
          </HomeContent>
        </HolderHomeScreen>
      </VariantsBox>
    </MainHolder>
  );
};
