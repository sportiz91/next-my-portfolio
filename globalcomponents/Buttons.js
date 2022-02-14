import styled from "styled-components";

export const SectionButton = styled.a`
  border: 0;
  font-family: Space Grotesk, sans-serif;
  font-size: ${(props) => (props.tech ? "1.5rem" : "1.8rem")};
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors.button3};
  color: ${(props) => props.theme.colors.button3};
  text-align: center;
  padding: ${(props) => (props.tech ? "1rem 3rem" : "2rem")};
  width: ${(props) => (props.tech ? "150px" : "200px")};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(29 222 255 / 0.2);
  }
`;
