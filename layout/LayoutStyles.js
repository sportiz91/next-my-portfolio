import styled from "styled-components";

export const BodyLayout = styled.div`
  max-width: 1280px;
  padding: 20rem 10rem 5rem;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.break864} {
    padding: 20rem 5rem 5rem;
  }
`;
