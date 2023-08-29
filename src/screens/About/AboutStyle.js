import styled from "styled-components";
import myImg from "../../assets/about-pic.png";

export const MainHolder = styled.div`
  padding-top: 4vh;
  height: 96vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
`;

export const HolderAbout = styled.div`
  // display: flex;
  // flex-direction: column;
  // width: 1200px;
  // align-items: center;
  // height: 360px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    height: 100%;
    padding: 20px 0px 50px 0px;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 90%;
  }
`;
export const AboutMe = styled.div`
  display: flex;
  gap: 4rem;
  height: 80%;

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
export const MyImg = styled.div`
  display: flex;
  height: 400px;
  width: 400px;
  margin: auto 0;
  background-image: url(${myImg});
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 8%;
`;
export const AboutDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .about-containers {
    display: flex;
    gap: 2rem;

    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .details-container {
    padding: 1.5rem;
    flex: 1;
    background: white;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    text-align: center;

    img {
      cursor: pointer;
      height: 2rem;
    }
    h3 {
      font-size: 1.17em;
      color: #000;
    }
    p {
      color: rgb(85, 85, 85);
      font-family: "Poppins", sans-serif;
      font-size: 0.9rem;
    }
  }
  .text-container {
    color: rgb(85, 85, 85);
  }
`;
