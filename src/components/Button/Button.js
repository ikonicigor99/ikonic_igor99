import React from "react";
import { MainHolder, Btn } from "./ButtonStyle";
export const Button = ({ type, text }) => {
  return (
    <MainHolder>
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
