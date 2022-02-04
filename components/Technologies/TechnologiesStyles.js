import styled from "styled-components";

export const TechInfoDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2rem;
  margin-top: 11rem;
`;

export const TechButtonsDiv = styled.div`
  width: 100%;
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  flex-direction: column;
`;

export const TechButton = styled.div`
  padding: 3rem 3rem;
  cursor: pointer;
  transition: 0.2s ease;

  &:nth-child(1) {
    border-left: 2px solid
      ${(props) =>
        props.state === "front"
          ? props.theme.colors.button3
          : props.theme.colors.paragraph};

    & button {
      color: ${(props) =>
        props.state === "front"
          ? props.theme.colors.button3
          : props.theme.colors.paragraph};
    }
  }

  &:nth-child(2) {
    border-left: 2px solid
      ${(props) =>
        props.state === "back"
          ? props.theme.colors.button3
          : props.theme.colors.paragraph};

    & button {
      color: ${(props) =>
        props.state === "back"
          ? props.theme.colors.button3
          : props.theme.colors.paragraph};
    }
  }

  &:nth-child(3) {
    border-left: 2px solid
      ${(props) =>
        props.state === "devops"
          ? props.theme.colors.button3
          : props.theme.colors.paragraph};

    & button {
      color: ${(props) =>
        props.state === "devops"
          ? props.theme.colors.button3
          : props.theme.colors.paragraph};
    }
  }

  &:hover {
    background: rgba(26 39 64 / 0.9);

    & button {
      color: ${(props) => props.theme.colors.button3};
    }
  }
`;

export const TechParagraph = styled.button`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.paragraph};
  background: 0;
  border: 0;
  text-align: start;
  cursor: pointer;
`;

export const TechDetailDiv = styled.div`
  width: 68%;
  height: 100%;
  grid-area: 1 / 3 / 2 / 11;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  background: rgba(26 39 64 / 0.9);
  border-radius: 10px;
  padding: 2rem;
`;

export const TechDetailBrandDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  align-self: center;
  height: fit-content;
  width: 100%;
  gap: 0.5rem;

  & .size {
    height: 50px;
    width: 50px;
    margin-bottom: 1rem;

    &:hover + .show {
      visibility: visible;
    }
  }
`;
