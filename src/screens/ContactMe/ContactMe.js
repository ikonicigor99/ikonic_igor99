import React from "react";
import { MainHolder, MainContactInfoContainer } from "./ContactMeStyle";
import { Title } from "../../components/Title/Title";
import { contactInfo } from "../../DummyData";
import emailIcon from "../../assets/icons/email.png";
export const ContactMe = () => {
  return (
    <MainHolder id="contactPage">
      <Title titleOne="Get in Touch" titleTwo="Contact Me" />
      <MainContactInfoContainer>
        <div className="contactInfoContainer">
          <img src={emailIcon} />
          <p>
            <a href="mailto:examplemail@hotmail.com">ikonici99@hotmail.com</a>
          </p>
        </div>
        <div className="contactInfoContainer">
          <img src={emailIcon} />
          <p>
            <a href="https://www.linkedin.com/in/igor-ikoni%C4%87-249623235/">
              LinkedIn
            </a>
          </p>
        </div>
      </MainContactInfoContainer>
    </MainHolder>
  );
};
