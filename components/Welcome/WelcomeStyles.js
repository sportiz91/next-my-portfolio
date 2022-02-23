/*
  Styled components for Hero Section
*/

import styled from "styled-components";

export const WelcomeSection = styled.section`
  width: 100%;
  padding: 5rem 2.5rem 0; /* on top of margin, on top of padding for body section layout */
  margin-bottom: 25rem;
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.showSection ? "1" : "0")};
  transform: translateX(
    ${(props) => (props.showSection ? "0" : "2rem")}
  ); /* Welcome Section comes from left to right */
  transition: 0.5s ease;

  /* No padding left and right for low width views */
  @media ${(props) => props.theme.breakpoints.break768} {
    padding: 5rem 0 0;
  }

  @media ${(props) => props.theme.breakpoints.break504} {
    padding: 4.5rem 0 0;
  }
`;

export const WelcomeButtonsDiv = styled.div`
  display: flex;
  gap: 1.5rem;

  @media ${(props) => props.theme.breakpoints.break422} {
    gap: 1rem;
  }
`;
