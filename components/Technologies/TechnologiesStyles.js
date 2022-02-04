import styled from "styled-components";

export const TechInfoDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2rem;
`;

export const TechButtonsDiv = styled.div`
  width: 100%;
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  flex-direction: column;
`;

export const TechButton = styled.div`
  padding: 1rem 3rem;
  border-left: 2px solid ${(props) => props.theme.colors.paragraph};
  transition: 0.2s ease;
`;

export const TechDetailDiv = styled.div`
  width: 100%;
  grid-area: 1 / 3 / 2 / 11;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
