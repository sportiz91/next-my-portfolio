import styled from "styled-components";

export const ContactText = styled.p`
  color: ${(props) => props.theme.colors.links};
  font-size: 1.2rem;
  transform: rotate(90deg);
  margin-bottom: 10rem;
  letter-spacing: 3px;
  position: relative;
  bottom: 0;
  transition: color 0.5s ease;

  & :hover {
    bottom: 6px;
    color: ${(props) => props.theme.colors.button3};
  }
`;
