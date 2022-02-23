import styled from "styled-components";

export const ContactText = styled.p`
  color: ${(props) => props.theme.colors.links};
  font-size: ${(props) => (props.vertical ? "1.75rem" : "1.2rem")};
  transform: ${(props) => (props.vertical ? "" : "rotate(90deg)")};
  margin-bottom: 10rem;
  letter-spacing: ${(props) => (props.vertical ? "2px" : "3px")};
  position: relative;
  bottom: 0;
  transition: color 0.5s ease;

  & :hover {
    bottom: ${(props) => (props.vertical ? "" : "6px")};
    left: ${(props) => (props.vertical ? "6px" : "")};
    color: ${(props) => props.theme.colors.button3};
  }

  @media ${(props) => props.theme.breakpoints.break650} {
    font-size: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.break460} {
    display: none;
  }
`;
