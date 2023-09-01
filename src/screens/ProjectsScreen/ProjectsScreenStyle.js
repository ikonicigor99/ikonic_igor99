import styled from "styled-components";
import arrowIcon from "../../assets/icons/arrow.png";

export const MainHolder = styled.div`
  padding-top: 4vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
  position: relative;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin: 20px;
  }
  .toContactPage {
    width: 30px;
    height: 30px;
    background-image: url(${arrowIcon});
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: 0px;
    right: -90px;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      display: none;
    }
  }
`;
export const ProjectsDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .project-containers {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;

    .project-container {
      padding: 1.5rem;
      flex: 1;
      border-radius: 2rem;
      border: rgb(53, 53, 53) 0.1rem solid;
      text-align: center;
      border-color: rgb(163, 163, 163);
      background: rgb(250, 250, 250);
      filter: brightness(0.9);

      .article-container {
        display: flex;
        text-align: initial;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 2.5rem;
        justify-content: space-around;
        border: 1px solid #000;
        height: 56vh;
        border-radius: 2rem;
        img {
          border-radius: 2rem;
          width: 100%;
          height: 100%;
        }
      }
      h2 {
        margin: 1rem;
        color: black;
        font-weight: 600;
        font-size: 1.75rem;
      }
      .btn-container {
        display: flex;
        justify-content: center;
        gap: 1rem;
      }
    }
  }
`;
