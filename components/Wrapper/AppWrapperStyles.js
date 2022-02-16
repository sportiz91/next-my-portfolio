import styled from "styled-components";

export const AppDivWrapper = styled.div``;

export const BodyDivWrapper = styled.div`
  @media ${(props) => props.theme.breakpoints.break864} {
    filter: ${(props) => (props.state ? "blur(8px)" : "")};
    opacity: ${(props) => (props.state ? "0.3" : "")};
    transition: 0.5s;
  }
`;
