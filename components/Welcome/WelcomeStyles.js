import styled from "styled-components";

export const WelcomeSection = styled.section`
  width: 100%;
  padding: 0 2.5rem;
  margin-bottom: 25rem;
  display: flex;
  padding-top: 5rem;
  flex-direction: column;
  opacity: ${(props) => (props.showSection ? "1" : "0")};
  transform: translateX(${(props) => (props.showSection ? "0" : "2rem")});
  transition: 0.5s ease;
`;

export const WelcomeButtonsDiv = styled.div`
  display: flex;
  gap: 1.5rem;
`;
