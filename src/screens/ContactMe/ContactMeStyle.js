import styled from "styled-components";

export const MainHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
`;
export const MainContactInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  background: rgb(250, 250, 250);
  margin: 2rem auto;
  padding: 0.5rem;

  .contactInfoContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem;
    img {
      height: 2rem;
    }
    a {
      color: black;
      text-decoration: none;
      text-decoration-color: white;
      transition: all 300ms ease;
      :hover {
        color: grey;
        text-decoration: underline;
        text-underline-offset: 1rem;
        text-decoration-color: rgb(181, 181, 181);
      }
    }
  }
`;
