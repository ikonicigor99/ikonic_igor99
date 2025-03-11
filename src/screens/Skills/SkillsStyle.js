import styled from "styled-components";
import arrowIcon from "../../assets/icons/arrow.png";

export const Experience = styled.div`
  padding-top: 4vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
  position: relative;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin: 0;
  }
`;
export const ExperienceDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .toProjectPage {
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
export const AboutContainers = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 2rem;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FrontendDetails = styled.div`
  padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  text-align: center;

  .experience-sub-title {
    color: rgb(85, 85, 85);
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
  .article-frontend {
    display: flex;
    text-align: initial;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2.5rem;
    justify-content: space-around;

    article {
      display: flex;
      width: 10rem;
      gap: 0.5rem;

      img {
        height: 2rem;
      }
    }
  }
`;
export const OtherDetails = styled.div`
  padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  text-align: center;

  .experience-sub-title {
    color: rgb(85, 85, 85);
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
  .article-other {
    display: flex;
    text-align: initial;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2.5rem;
    justify-content: space-around;
  }
  article {
    display: flex;
    width: 10rem;
    justify-content: space-around;
    gap: 0.5rem;

    img {
      height: 2rem;
    }
  }
`;
