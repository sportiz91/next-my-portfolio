import styled from "styled-components";

export const BodyLayout = styled.div`
  max-width: 1280px;
  padding: 20rem 10rem 5rem;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.break768} {
    padding: 20rem 6rem 5rem;
  }

  @media ${(props) => props.theme.breakpoints.break650} {
    padding: 20rem 4.5rem 5rem;
  }

  @media ${(props) => props.theme.breakpoints.break504} {
    padding: 20rem 2.5rem 5rem;
  }
`;
