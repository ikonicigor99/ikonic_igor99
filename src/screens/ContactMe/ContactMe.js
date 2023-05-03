import React from "react";
import {
  MainHolder,
  HolderContactMe,
  HolderContact,
  HolderInfo,
  HolderIcons,
  Icons,
  Info,
} from "./ContactMeStyle";
import { Title } from "../../components/Title/Title";
import { contactInfo } from "../../DammyData";
export const ContactMe = () => {
  return (
    <MainHolder>
      <HolderContactMe>
        <Title type="leftTitle" title="Contact Me" />
        <HolderContact>
          <div className="contactMe">
            If you enjoyed my portfolio and want to chat about an idea or a job,
            please contact me through one of these channels:
          </div>
          <HolderInfo>
            {contactInfo.map((item, index) => (
              <HolderIcons key={index}>
                <Icons>
                  <div>{item.icon}</div>
                </Icons>
                <Info>
                  <div>{item.text}</div>
                </Info>
              </HolderIcons>
            ))}
          </HolderInfo>
        </HolderContact>
      </HolderContactMe>
    </MainHolder>
  );
};
