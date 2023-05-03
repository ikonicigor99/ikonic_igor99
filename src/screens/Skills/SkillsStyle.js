import styled from "styled-components";

export const MainHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const HolderSkills = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    height: 100%;
    width: 100%;
    padding: 20px 0px 50px 0px;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 90%;
  }
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  padding: 50px 0px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 90%;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: rgba(240, 46, 170, 0.4) 0px 0px 40px 2px;
  }
`;
