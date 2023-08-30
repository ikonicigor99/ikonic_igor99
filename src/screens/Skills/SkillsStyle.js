import styled from "styled-components";
export const Experience = styled.div`
  padding-top: 4vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
`;
export const ExperienceDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const AboutContainers = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 2rem;
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
      justify-content: space-around;
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
