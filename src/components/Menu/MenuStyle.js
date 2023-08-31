import styled from "styled-components";

export const MainHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  @media screen and (min-width: 320px) and (max-width: 768px) {
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
  }
`;

export const HolderOptions = styled.div`
  .options {
    color: #000;
    cursor: pointer;
    gap: 2rem;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 0px 10px;
    font-family: "Poppins", sans-serif;
  }
`;
