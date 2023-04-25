import styled, { keyframes } from "styled-components";
import profileImage from "../../assets/myImage.jpeg";
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
  padding: 40px 0px;
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
  width: 260px;
  height: 260px;
  background-image: url(${profileImage});
  background-position: center;
  background-size: 100%;
  //   box-shadow: 0px 0px 2px white;
  animation: ${animate} 5s ease-in-out infinite;
  transition: all 1s ease-in-out;
  border-radius: 90px;
  border: 1px solid #fff;
  padding: 2px;
  @media screen and (min-width: 320px) and (max-width: 425px) {
    width: 180px;
    height: 180px;
    margin: 20px 0px;
  }
  @media screen and (min-width: 425px) and (max-width: 768px) {
    width: 220px;
    height: 220px;
    margin: 10px 0px;
  }
`;

export const MyIntroduction = styled.div`
  width: 55%;
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
    font-size: 70px;
    color: #fff;
    font-family: "Alegreya Sans SC", sans-serif;
    font-weight: 700;
    @media screen and (min-width: 320px) and (max-width: 425px) {
      font-size: 40px;
      text-align: center;
    }
    @media screen and (min-width: 425px) and (max-width: 768px) {
      font-size: 50px;
      text-align: center;
    }
  }
  .desc {
    font-size: 40px;
    color: #fff;
    font-family: "Alegreya Sans SC", sans-serif;
    font-weight: 300;
    @media screen and (min-width: 320px) and (max-width: 425px) {
      font-size: 25px;
      text-align: center;
    }
    @media screen and (min-width: 425px) and (max-width: 768px) {
      font-size: 30px;
      text-align: center;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: #fff;
    transform: rotate(-4deg);
    margin-top: 15px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
      width: 295px;
    }
    @media screen and (min-width: 425px) and (max-width: 768px) {
      width: 350px;
    }
  }
`;
