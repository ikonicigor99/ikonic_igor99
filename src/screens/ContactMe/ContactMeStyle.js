import styled from "styled-components";

export const MainHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const HolderContactMe = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  align-items: center;
  height: 412px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    height: 100%;
    width: 90%;
    padding: 20px 0px;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 90%;
  }
`;
export const HolderContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 52%;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
  div {
    color: #fff;
    font-weight: 700;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    padding: 50px 0px;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      padding: 20px 0px;
      text-align: center;
      font-size: 15px;
    }
  }
`;
export const HolderInfo = styled.div`
  width: 100%;
  display: flex;
  div {
    padding: 0;
  }
`;
export const HolderIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const Icons = styled.div``;
export const Info = styled.div`
  div {
    font-size: 16px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
      font-size: 14px;
    }
  }
`;
