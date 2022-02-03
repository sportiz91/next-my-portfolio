import styled from "styled-components";

export const WelcomeSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 25rem;
  opacity: ${(props) => (props.showSection ? "1" : "0")};
  transform: translateX(${(props) => (props.showSection ? "0" : "2rem")});
  transition: all 0.2s;
`;

export const DivWelcomeContent = styled.div`
  display: flex;
  padding-top: 6rem;
  flex-direction: column;
`;

export const DivWelcomeSVG = styled.div``;
