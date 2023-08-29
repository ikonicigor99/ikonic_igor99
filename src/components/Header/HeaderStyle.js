import styled from "styled-components";
export const MainHolder = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
  @media screen and (min-width: 320px) and (max-width: 425px) {
    padding-top: 10px;
  }
`;
export const HolderHeader = styled.div`
  width: 1200px;
  height: 85px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 425px) {
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  @media screen and (min-width: 425px) and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    height: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
  }
  .title {
    color: #555555;
    font-size: 35px;
    font-family: "Poppins", sans-serif;
    font-weight: 200;

    @media screen and (min-width: 320px) and (max-width: 768px) {
      text-align: center;
      font-size: 30px;
    }
  }
`;
