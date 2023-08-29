import styled, { keyframes } from "styled-components";
import profileImage from "../../assets/me.jpeg";

export const MainHolder = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const HolderHomeScreen = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  height: 412px;
  margin: 30px 0px;
  @media screen and (min-width: 320px) and (max-width: 425px) {
    height: 100%;
    width: 100%;
  }
  @media screen and (min-width: 425px) and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 90%;
  }
`;
export const HomeContent = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    width: 90%;
    padding: 10px 0px 50px 0px;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
  }
`;
const animate = keyframes`
0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%
  }
  
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%
  }
`;

export const MyImage = styled.div`
  width: 390px;
  height: 390px;
  background-image: url(${profileImage});
  background-position: center;
  background-size: 100%;
  //   box-shadow: 0px 0px 2px white;
  // animation: ${animate} 5s ease-in-out infinite;
  transition: all 1s ease-in-out;
  background-repet: no-repet;
  border-radius: 50%;
  border: 1px solid #fff;
  padding: 2px;
  @media screen and (min-width: 320px) and (max-width: 425px) {
    width: 280px;
    height: 280px;
    margin: 20px 0px;
  }
  @media screen and (min-width: 425px) and (max-width: 768px) {
    width: 320px;
    height: 520px;
    margin: 10px 0px;
  }
`;

export const MyIntroduction = styled.div`
  width: 50%;
  div {
    @media screen and (min-width: 320px) and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @media screen and (min-width: 768px) and (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 90%;
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 1.1rem;
    color: #555555;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    text-align: center;
    @media screen and (min-width: 320px) and (max-width: 425px) {
      font-size: 40px;
      text-align: center;
    }
    @media screen and (min-width: 425px) and (max-width: 768px) {
      font-size: 50px;
      text-align: center;
    }
  }
  .name {
    font-size: 3.9rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    text-align: center;
    padding: 10px 0px;
  }
  .desc {
    font-size: 2.5rem;
    color: #fff;
    font-family: "Alegreya Sans SC", sans-serif;
    font-weight: 300;
    color: #555555;
    font-weight: 500;
    text-align: center;

    @media screen and (min-width: 320px) and (max-width: 425px) {
      font-size: 25px;
      text-align: center;
    }
    @media screen and (min-width: 425px) and (max-width: 768px) {
      font-size: 30px;
      text-align: center;
    }
  }
`;
export const HolderBtns = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 0px;
`;
