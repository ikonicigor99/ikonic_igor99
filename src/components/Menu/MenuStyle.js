import styled from "styled-components";

export const MainHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 425px) {
    align-items: center;
    flex-direction: column;
  }
  @media screen and (min-width: 425px) and (max-width: 768px) {
    justify-content: center;
  }
`;
export const HolderMenu = styled.div`
  display: flex;
  align-items: center;

  div {
    color: #fff;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-size: 14px;
    :nth-child(2) {
      padding-left: 10px;
    }
  }
`;

export const HolderOptions = styled.div`
  div {
    color: #b0a4a4;
    cursor: pointer;
  }
  .activeClass {
    border-bottom: 1px solid #fff;
    color: #fff;
  }
`;
