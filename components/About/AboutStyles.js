import styled from "styled-components";

export const AboutDivWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "left me"
    "right right";
  column-gap: 10rem;
  margin-bottom: 12rem;
  margin-top: 6rem;
`;

export const AboutMiniParagraph = styled.p`
  color: ${(props) => props.theme.colors.paragraph};
  line-height: 1.5;
  padding-top: 1.5rem;
`;

export const AboutLeftDiv = styled.div`
  grid-area: left;

  p {
    &:nth-child(1) {
      padding-top: 0;
    }
  }
`;

export const AboutRightDiv = styled.div`
  grid-area: right;

  p {
    width: 96%;
  }
`;

export const AboutImgDiv = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 5px;
  grid-area: me;
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
