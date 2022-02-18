import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.break1280} {
    display: grid;
    grid-template-columns: repeat(auto-fit, 420px);
    gap: 4rem;
  }

  @media ${(props) => props.theme.breakpoints.break864} {
    grid-template-columns: repeat(auto-fit, 400px);
  }

  @media ${(props) => props.theme.breakpoints.break768} {
    grid-template-columns: repeat(auto-fit, 350px);
    gap: 0;
  }

  @media ${(props) => props.theme.breakpoints.break504} {
    grid-template-columns: repeat(auto-fit, 300px);
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    grid-template-columns: repeat(auto-fit, 220px);
  }
`;

export const ProjectDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 7rem 0;
  width: 100%;

  &:nth-child(1) {
    margin-top: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.break1280} {
    grid-template-areas:
      "img"
      "detail";
    grid-template-columns: 1fr;
    box-shadow: 0 0 10px 10px rgba(0 0 0 / 0.1);
    transition: 0.2s ease;

    &:nth-child(1) {
      margin-top: 7rem;
    }

    &:hover {
      transform: translateY(-3px);
    }
  }

  @media ${(props) => props.theme.breakpoints.break1196} {
    margin: 3rem 0;

    &:nth-child(1) {
      margin-top: 3rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.break768} {
    &:nth-child(1) {
      margin-top: 2rem;
    }
  }
`;

export const ProjectWrapper = styled.div``;

export const ProjectImgDiv = styled.div`
  grid-area: 1 / 1 / 2 / 8;
  height: 350px;
  width: 500px;
  position: relative;
  border-radius: 10px;
  opacity: 0.7;
  box-shadow: 0 0 50px 2px rgba(0 0 0 / 0.1);
  transition: 0.5s ease;

  &:hover {
    opacity: 1;
    transform: translateX(10px);
  }

  & .project-img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }

  @media ${(props) => props.theme.breakpoints.break1280} {
    grid-area: img;
    height: 275px;
    width: 100%;
    border-radius: 10px 10px 0 0;

    &:hover {
      transform: translateX(0);
    }
  }

  @media ${(props) => props.theme.breakpoints.break768} {
    height: 225px;
  }

  @media ${(props) => props.theme.breakpoints.break504} {
    height: 200px;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    height: 150px;
  }
`;

export const ProjectImgAnchor = styled.a`
  height: 100%;
  width: 100%;
  position: absolute;

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
  border-radius: 10px;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.colors.button3};
    opacity: 0.2;
    border-radius: 10px;
    transition: 0.5s ease;
  }

  @media ${(props) => props.theme.breakpoints.break1280} {
    border-radius: 10px 10px 0 0;

    &:before {
      border-radius: 10px 10px 0 0;
    }
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
    border-radius: 0 0 10px 10px;
  }
`;

export const ProjectTitleDiv = styled.div``;

export const ProjectInfoDescription = styled.div`
  width: 100%;
  padding: ${(props) => (props.nopadding ? "0" : "2rem")};
  color: ${(props) => props.theme.colors.paragraph};
  background: ${(props) =>
    props.nobackground ? "" : props.theme.colors.description};
  border-radius: 10px;
  margin: ${(props) => (props.other ? "1.5rem 0 3rem" : "3rem 0 0")};
  line-height: 1.5;

  @media ${(props) => props.theme.breakpoints.break1280} {
    background: transparent;
    padding: 0;
    margin: ${(props) => (props.other ? "1.5rem 0 3rem" : "1rem 0")};
  }

  @media ${(props) => props.theme.breakpoints.break504} {
    font-size: 1.4rem;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    font-size: 1.3rem;
  }
`;

export const ProjectInfoTags = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  column-gap: 2rem;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.break1280} {
    justify-content: start;
  }

  @media ${(props) => props.theme.breakpoints.break504} {
    & p {
      font-size: 1.3rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    & p {
      font-size: 1.2rem;
    }
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
  color: ${(props) => props.theme.colors.paragraph};
  transition: 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.colors.button3};
  }
`;
