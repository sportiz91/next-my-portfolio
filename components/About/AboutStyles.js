import styled from "styled-components";

export const AboutDivWrapper = styled.div`
  margin: 6rem 0 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  @media ${(props) => props.theme.breakpoints.break1280} {
    padding: 0 2rem;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    padding: 0 1.5rem;
  }
`;

export const AboutParagraphWrapper = styled.div``;

export const AboutMiniParagraph = styled.p`
  color: ${(props) => props.theme.colors.paragraph};
  line-height: 1.5;
  padding-top: 1.5rem;

  & :nth-child(1) {
    padding: 0;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    font-size: 1.45rem;
  }

  @media ${(props) => props.theme.breakpoints.break400} {
    font-size: 1.3rem;
  }
`;

export const AboutImgDiv = styled.div`
  height: 275px;
  width: 275px;
  border-radius: 5px;
  grid-area: me;

  @media ${(props) => props.theme.breakpoints.break864} {
    height: 250px;
    width: 250px;
  }

  @media ${(props) => props.theme.breakpoints.break650} {
    height: 175px;
    width: 175px;
  }

  @media ${(props) => props.theme.breakpoints.break504} {
    height: 200px;
    width: 200px;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    height: 150px;
    width: 150px;
  }
`;

export const AboutImgOverlay = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  position: relative;
  opacity: 0.7;
  transition: 0.3s ease;

  &:hover {
    opacity: 1;
    transform: rotate(-2deg);

    &::before {
      background: transparent;
    }

    & .overflow {
      left: 5%;
      top: 5%;
    }
  }

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    background: ${(props) => props.theme.colors.button3};
    opacity: 0.3;
  }
`;

export const AboutImgOverflow = styled.div`
  position: absolute;
  top: 7%;
  left: 7%;
  height: 100%;
  width: 100%;
  border: 2px solid ${(props) => props.theme.colors.button3};
  border-radius: 5px;
  z-index: -1;
  transition: 0.3s ease;
`;

export const AboutImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;
