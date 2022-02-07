import styled from "styled-components";

export const TimeLineDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 250px;
  gap: 1rem;

  & .icon {
    cursor: pointer;
  }
`;

export const TimelineDetailedWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TimeLineDetailedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 130px;
  min-width: 200px;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(26 39 64 / 0.9);
  border-radius: 5px;
`;

export const TimeLinedDetailedYear = styled.h2`
  font-size: 2.5rem;
  background: linear-gradient(
    135deg,
    white 20px,
    rgba(255 255 255 / 0.66) 30px
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TimeLineDetailedDescription = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.paragraph};
`;
