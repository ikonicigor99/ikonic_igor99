import React from "react";
import {
  MainHolder,
  HolderHomeScreen,
  HomeContent,
  MyImage,
  MyIntroduction,
  HolderBtns,
} from "./HomeStyle";
import { TitleAboutMe } from "../../DummyData";
import { VariantsBox } from "../../components/variantsBox/VariantsBox";
import { Button } from "../../components/Button/Button";
export const Home = () => {
  return (
    <MainHolder>
      {" "}
      <VariantsBox>
        <HolderHomeScreen>
          <HomeContent>
            <MyImage />
            <MyIntroduction>
              {TitleAboutMe.map((item, index) => (
                <div key={index}>
                  <div className="title">{item.title}</div>
                  <div className="name"> {item.name}</div>
                  <div className="desc">{item.description}</div>
                </div>
              ))}
              <HolderBtns>
                <Button
                  type="transp"
                  text="Download CV"
                  url={
                    "file:///C:/Users/centar/Desktop/Igor%20Ikonic%20CV%20.pdf"
                  }
                />
                <Button text="Contact Info" className="footerMenu" />
              </HolderBtns>
            </MyIntroduction>
          </HomeContent>
        </HolderHomeScreen>
      </VariantsBox>
    </MainHolder>
  );
};
