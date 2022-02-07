import styled from "styled-components";

export const TechInfoDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2rem;
  margin-top: 11rem;
`;

export const TechButtonsDiv = styled.div`
  width: 65%;
  grid-area: 1 / 1 / 2 / 5;
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
    background: ${(props) =>
      props.state === "front" ? "rgba(26 39 64 / 0.9)" : ""};

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
    background: ${(props) =>
      props.state === "back" ? "rgba(26 39 64 / 0.9)" : ""};

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
    background: ${(props) =>
      props.state === "devops" ? "rgba(26 39 64 / 0.9)" : ""};

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
  width: 100%;
  height: 100%;
  grid-area: 1 / 5 / 2 / 11;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
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
    transition: 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    &:hover + .show {
      opacity: 1;
    }
  }
`;

export const TechMiniParagraph = styled.p`
  color: ${(props) => props.theme.colors.paragraph};
  opacity: 0;
  transition: 0.3s ease;
`;
