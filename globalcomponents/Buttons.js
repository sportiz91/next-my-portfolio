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

  @media ${(props) => props.theme.breakpoints.break864} {
    font-size: ${(props) => (props.tech ? "1.5rem" : "1.5rem")};
    padding: ${(props) => (props.tech ? "1rem 3rem" : "1.5rem")};
    width: ${(props) => (props.tech ? "150px" : "150px")};
  }

  @media ${(props) => props.theme.breakpoints.break504} {
    font-size: ${(props) => (props.tech ? "1.5rem" : "1.3rem")};
    padding: ${(props) => (props.tech ? "1rem 3rem" : "1.3rem")};
    width: ${(props) => (props.tech ? "150px" : "130px")};
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    font-size: ${(props) => (props.tech ? "1.5rem" : "1.15rem")};
    padding: ${(props) => (props.tech ? "1rem 3rem" : "1rem")};
    width: ${(props) => (props.tech ? "150px" : "110px")};
  }

  @media ${(props) => props.theme.breakpoints.break339} {
    font-size: ${(props) => (props.tech ? "1.5rem" : "1.05rem")};
    padding: ${(props) => (props.tech ? "1rem 3rem" : "0.9rem")};
    width: ${(props) => (props.tech ? "150px" : "100px")};
  }
`;
