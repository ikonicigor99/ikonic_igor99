import styled from "styled-components";
import gitIcon from "../../assets/icons/git.png";
import domainIcon from "../../assets/icons/domain.png";
export const MainHolder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const HolderMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 10px 0px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    padding-top: 20px;
    width: 100%;
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  .option {
    font-size: 50px;
    font-family: "Alegreya Sans SC", sans-serif;
    font-weight: 700;
    padding-left: 10px;
    color: #b0a4a4;
    cursor: pointer;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 14px;
    }
  }
  .activeClass {
    font-size: 75px;
    color: #fff;
    font-family: "Alegreya Sans SC", sans-serif;
    font-weight: 700;
    padding-left: 10px;
    cursor: pointer;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 25px;
    }
  }
  .line {
    width: 260px;
    height: 1px;
    background-color: #fff;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      width: 100px;
    }
  }
`;
export const HolderProject = styled.div`
  display: flex;
  justify-content: center;
`;
export const Projects = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 800px;
    box-shadow: rgba(240, 46, 170, 0.4) 0px 0px 40px 2px;
    border-radius: 10px;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      width: 100%;
    }
  }
  .holderGitCard {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .gitLink {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      font-size: 13px;
    }
  }
  .vercelProject {
    display: flex;
    align-items: center;
    margin-top: 10px;
    .domainLink {
      color: #fff;
      text-decoration: none;
      font-size: 20px;

      @media screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 13px;
      }
    }
  }
`;
export const HolderImage = styled.div`
  width: 500px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 90%;
  }
  img {
    width: 100%;
  }
`;
export const HolderLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 25px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin: 0;
  }
`;

export const GitIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${gitIcon});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: #fff;
  border-radius: 100%;
  margin-right: 15px;
`;
export const DomainIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${domainIcon});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: #fff;
  border-radius: 100%;
  margin-right: 15px;
`;
