import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 7rem 0;

  &:nth-child(1) {
    padding-top: 3rem;
  }
`;

export const ProjectImgDiv = styled.div`
  grid-area: 1 / 1 / 2 / 8;
  height: 375px;
  width: 550px;
  position: relative;
  border-radius: 2px;
  opacity: 0.7;
  box-shadow: 0 10px 30px -10px rgb(0 0 0 / 0.75);
  transition: 0.5s ease;

  &:hover {
    opacity: 1;
    transform: translateX(10px);
  }

  & .project-img {
    height: 100%;
    width: 100%;
    border-radius: 2px;
  }
`;

export const ProjectImgAnchor = styled.a`
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 2px;

  &:hover div {
    &:before {
      background: ${(props) => props.theme.colors.button3};
      opacity: 0.2;
    }
  }
`;

export const ProjectImgOverlay = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 2px;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.colors.button3};
    opacity: 0.2;
    border-radius: 2px;
    transition: 0.5s ease;
  }
`;

export const ProjectInfoDiv = styled.div`
  grid-area: 1 / 8 / 2 / 13;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  text-align: end;
  gap: 2rem;
  position: relative;
  margin-top: 2rem;
`;

export const ProjectTitleDiv = styled.div``;

export const ProjectInfoName = styled.h2`
  color: ${(props) =>
    props.other ? props.theme.colors.button3 : props.theme.colors.links};
  font-size: ${(props) => (props.other ? "2rem" : "")};
`;

export const ProjectInfoDescription = styled.div`
  width: 100%;
  padding: ${(props) => (props.nopadding ? "0" : "2rem")};
  color: ${(props) => props.theme.colors.paragraph};
  background: ${(props) =>
    props.nobackground ? "" : props.theme.colors.description};
  border-radius: 5px;
  margin: ${(props) => (props.other ? "1.5rem 0 3rem" : "3rem 0 0")};
  line-height: 1.5;
`;

export const ProjectInfoTags = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2rem;
`;

export const ProjectSocialsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2rem;
`;

export const ProjectSocialsAnchor = styled.a`
  color: ${(props) => props.theme.colors.links};
  transition: 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.colors.button3};
  }
`;
