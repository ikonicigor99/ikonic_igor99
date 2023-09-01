import styled from "styled-components";

export const MainHolder = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const HolderTitle = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-items: center;

  .titleOne {
    color: #555555;
  }
  .titleTwo {
    font-size: 3rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    @media screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;
export const LeftTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .titleLeft {
    color: #fff;
    font-size: 50px;
    font-family: "Alegreya Sans SC", sans-serif;
    font-weight: 700;
    padding-left: 30px;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      padding: 0;
    }
  }

  .lineLeft {
    width: 260px;
    height: 1px;
    background-color: #fff;
  }
`;
export const RightTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  .titleRight {
    color: #fff;
    font-size: 50px;
    font-family: "Alegreya Sans SC", sans-serif;
    font-weight: 700;
    padding-left: 30px;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      padding: 0;
    }
  }
  .lineRight {
    width: 260px;
    height: 1px;
    background-color: #fff;
  }
`;
