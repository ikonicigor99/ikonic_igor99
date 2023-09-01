import styled from "styled-components";
import arrowIcon from "../../assets/icons/arrow.png";
export const MainHolder = styled.div`
  padding-top: 4vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
  position: relative;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin: 0px 20px;
  }
`;

export const HolderAbout = styled.div`
  @media screen and (min-width: 320px) and (max-width: 768px) {
    height: 100%;
    padding: 20px 0px 50px 0px;
  }

  .toExperiancePage {
    width: 30px;
    height: 30px;
    background-image: url(${arrowIcon});
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: 0px;
    right: -90px;

    @media screen and (min-width: 320px) and (max-width: 768px) {
      display: none;
    }
  }
`;
export const AboutMe = styled.div`
  display: flex;
  gap: 4rem;
  height: 80%;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  div {
    color: #fff;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-size: 20px;
    // @media screen and (min-width: 320px) and (max-width: 768px) {
    //   text-align: center;
    //   font-size: 15px;
    // }
  }
`;
export const MyImg = styled.div`
  display: flex;
  height: 275px;
  width: 275px;
  margin: auto 0;
  border-radius: 8%;
  img {
    border-radius: 2rem;
  }
  @media screen and (max-width: 600px) {
    width: auto;
    height: 46vw;
    justify-content: center;
  }
  @media screen and (max-width: 1200px) {
    width: 275px;
    height: 275px;
    margin: 0 auto 2rem;
  }
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

    @media screen and (min-width: 320px) and (max-width: 375px) {
      flex-direction: column;
      margin: 0;
    }
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
    @media screen and (max-width: 600px) {
      text-align: justify;
    }
  }
`;
