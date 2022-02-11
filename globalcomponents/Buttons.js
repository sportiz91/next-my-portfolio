import styled from "styled-components";

export const SectionButton = styled.a`
  border: 0;
  font-family: Space Grotesk, sans-serif;
  font-size: 1.8rem;
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors.button3};
  color: ${(props) => props.theme.colors.button3};
  text-align: center;
  padding: 2rem;
  width: 200px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(29 222 255 / 0.2);
  }
`;
