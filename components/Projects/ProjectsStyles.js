import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.break1280} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProjectDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 7rem 0;

  &:nth-child(1) {
    padding-top: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.break1280} {
    grid-template-areas:
      "img"
      "detail";
    grid-template-columns: 1fr;

    &:nth-child(1) {
      padding-top: 7rem;
    }
  }
`;

export const ProjectWrapper = styled.div``;

export const ProjectImgDiv = styled.div`
  grid-area: 1 / 1 / 2 / 8;
  height: 350px;
  width: 500px;
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

  @media ${(props) => props.theme.breakpoints.break1280} {
    grid-area: img;
    height: 275px;
    width: 100%;
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

  @media ${(props) => props.theme.breakpoints.break1280} {
    grid-area: detail;
    align-items: start;
    text-align: start;
    padding: 2rem;
    background: ${(props) =>
      props.nobackground ? "" : props.theme.colors.description};
    margin-top: 0;
  }
`;

export const ProjectTitleDiv = styled.div``;

export const ProjectInfoDescription = styled.div`
  width: 100%;
  padding: ${(props) => (props.nopadding ? "0" : "2rem")};
  color: ${(props) => props.theme.colors.paragraph};
  background: ${(props) =>
    props.nobackground ? "" : props.theme.colors.description};
  border-radius: 5px;
  margin: ${(props) => (props.other ? "1.5rem 0 3rem" : "3rem 0 0")};
  line-height: 1.5;

  @media ${(props) => props.theme.breakpoints.break1280} {
    background: transparent;
    padding: 0;
    margin-bottom: 2rem;
  }
`;

export const ProjectInfoTags = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2rem;

  @media ${(props) => props.theme.breakpoints.break1280} {
    justify-content: start;
  }
`;

export const ProjectSocialsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2rem;

  @media ${(props) => props.theme.breakpoints.break1280} {
    justify-content: start;
  }
`;

export const ProjectSocialsAnchor = styled.a`
  color: ${(props) => props.theme.colors.links};
  transition: 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.colors.button3};
  }
`;
