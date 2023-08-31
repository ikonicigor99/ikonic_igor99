import React from "react";
import { MainHolder, Btn } from "./ButtonStyle";
import { HashLink as Link } from "react-router-hash-link";
export const Button = ({ type, text, url }) => {
  const onClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noreferrer");
    }
  };
  return (
    <MainHolder onClick={() => onClick(url)}>
      {type === "transp" ? (
        <Btn>
          <div className="buttonOne">{text}</div>
        </Btn>
      ) : (
        <Btn>
          <div className="buttonTwo">{text}</div>
        </Btn>
      )}
    </MainHolder>
  );
};
