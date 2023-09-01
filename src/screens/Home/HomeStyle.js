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
  margin: 30px 0px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;
export const HomeContent = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
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
  background-repeat: no-repeat;

  //   box-shadow: 0px 0px 2px white;
  // animation: ${animate} 5s ease-in-out infinite;
  transition: all 1s ease-in-out;
  background-repet: no-repet;
  border-radius: 50%;
  border: 1px solid #fff;
  padding: 2px;

  @media screen and (max-width: 600px) {
    width: auto;
    height: 46vw;
    justify-content: center;
  }
  @media screen and (max-width:1200px){
    width: 275px;
    height: 275px;
    margin: 0 auto 2rem;
}
  }
`;

export const MyIntroduction = styled.div`
  width: 50%;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
  .title {
    font-size: 1.1rem;
    color: #555555;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    text-align: center;
  }
  .name {
    font-size: 3.9rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    text-align: center;
    padding: 10px 0px;
    @media screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }
  .desc {
    font-size: 2.5rem;
    color: #fff;
    font-family: "Alegreya Sans SC", sans-serif;
    font-weight: 300;
    color: #555555;
    font-weight: 500;
    text-align: center;
    @media screen and (max-width: 600px) {
      font-size: 2rem;
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
