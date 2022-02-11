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

export const WelcomeParagraph = styled.p`
  font-size: 2rem;
  max-width: 600px;
  color: ${(props) => props.theme.colors.paragraph};
  line-height: 1.6;
  font-weight: 100;
  margin-bottom: 5rem;
`;

export const WelcomeButtonsDiv = styled.div`
  display: flex;
  gap: 1.5rem;
`;
