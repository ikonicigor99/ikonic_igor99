import styled from "styled-components";

export const MainHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HolderAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  align-items: center;
  height: 360px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    height: 100%;
    padding: 20px 0px 50px 0px;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 90%;
  }
`;
export const AboutMe = styled.div`
  width: 52%;
  display: flex;
  padding-top: 50px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 90%;
    padding-top: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 90%;
  }
  div {
    color: #fff;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-size: 20px;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      text-align: center;
      font-size: 15px;
    }
  }
`;
