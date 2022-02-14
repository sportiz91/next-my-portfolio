import styled from "styled-components";

export const TimeLineDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
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
`;

export const TimeLineDetailedDescription = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.paragraph};
`;

export const TimeLineCirclesDiv = styled.div`
  display: flex;
  gap: 2rem;

  & .icon {
    cursor: pointer;
  }
`;

export const TimeLineCircleWrapper = styled.div`
  height: 20px;
  width: 20px;
  background: transparent;
  position: relative;
  cursor: pointer;
`;

export const TimeLineCircle = styled.div`
  height: 5px;
  width: 5px;
  top: 8px;
  left: 8px;
  border-radius: 50%;
  position: absolute;
  background: ${(props) =>
    props.clicked ? props.theme.colors.primary : props.theme.colors.paragraph};
  transform: ${(props) => (props.clicked ? "scale(1.4)" : "")};
  transition: 0.3s ease;
`;
