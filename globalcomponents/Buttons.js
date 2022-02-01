import styled from "styled-components";

export const SectionButton = styled.button`
  border: 0;
  font-family: Space Grotesk, sans-serif;
  font-size: 2rem;
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors.button3};
  color: ${(props) => props.theme.colors.primary};
  padding: 2rem;
  width: 200px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.button3};
    border: 2px solid transparent;
  }
`;
