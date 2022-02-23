/*
  Styled components for Timeline sub-section
  ---
  IMPORTANT THING TO NOTE: Whenever I have an overflow (x in this case), the resulting scroll bar if I overflow: auto or overflow: scroll
  will have the width/height of the current overflow. In here we have a wrapper div of about 1300px, but the max-width was determined at about
  945px. So, an overflow-x of 1300-945 is made. Maximum scroll width will be of that amount (356). To overcome that, I have to make the last
  div 100%.

*/
import styled from "styled-components";

export const TimeLineWrapper = styled.div`
  @media ${(props) => props.theme.breakpoints.break1280} {
    padding 0 2rem;
  }
`;

export const TimeLineDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4rem 0;
`;

export const TimelineDetailedWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x-mandatory;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TimeLineDetailedWrappingNode = styled.div`
  min-width: ${(props) => (props.last ? "100%" : "min-content")};
  margin-right: ${(props) => (props.last ? "" : "2rem")};
`;

export const TimeLineDetailedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 130px;
  width: 200px;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(26 39 64 / 0.9);
  border-radius: 5px;
  scroll-snap-align: start;
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  cursor: pointer;

  /* Adjustment of divs for mobile view */
  @media ${(props) => props.theme.breakpoints.break504} {
    height: 100px;
    width: 150px;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    height: 90px;
    width: 130px;
  }
`;

export const TimeLinedDetailedYear = styled.h2`
  font-size: 2.5rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.links} 20px,
    ${(props) => props.theme.colors.paragraph} 30px
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.break504} {
    font-size: 1.75rem;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    font-size: 1.6rem;
  }
`;

export const TimeLineDetailedDescription = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.paragraph};

  @media ${(props) => props.theme.breakpoints.break504} {
    font-size: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    font-size: 0.9rem;
  }
`;

export const TimeLineCirclesDiv = styled.div`
  display: flex;
  gap: 2rem;

  & .icon {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.links};
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.break504} {
    & .icon {
      font-size: 1.25rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    & .icon {
      font-size: 1.1rem;
    }
  }
`;

export const TimeLineCircleWrapper = styled.div`
  height: 20px;
  width: 20px;
  background: transparent;
  position: relative;
  cursor: pointer;

  @media ${(props) => props.theme.breakpoints.break504} {
    height: 10px;
    width: 10px;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    height: 8px;
    width: 8px;
  }
`;

export const TimeLineCircle = styled.div`
  height: 5px;
  width: 5px;
  top: 8px;
  left: 8px;
  border-radius: 50%;
  position: absolute;
  background: ${(props) =>
    props.clicked ? props.theme.colors.links : props.theme.colors.paragraph};
  transform: ${(props) => (props.clicked ? "scale(1.4)" : "")};
  transition: 0.3s ease;

  @media ${(props) => props.theme.breakpoints.break504} {
    top: 4px;
    left: 4px;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    top: 3px;
    left: 3px;
    transform: ${(props) => (props.clicked ? "scale(1.35)" : "")};
  }
`;
