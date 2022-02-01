import styled from "styled-components";

export const SectionTitle = styled.h1`
  font-size: 6.5rem;
  width: 150%;
  /* background: linear-gradient(135deg, white 20%, rgba(255 255 255 / 0.66) 60%); */
  background: ${(props) =>
    props.projects
      ? "linear-gradient(135deg, white, rgba(255 255 255 / 0.66) 10%)"
      : "linear-gradient(135deg, white 20%, rgba(255 255 255 / 0.66) 60%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SectionParagraph = styled.p`
  font-size: 2.4rem;
  width: 125%;
  color: ${(props) => props.theme.colors.paragraph};
  line-height: 1.75;
  font-weight: 100;
`;

export const SectionSeparator = styled.hr`
  height: 5px;
  width: 100px;
  border: 0;
  background: ${(props) => props.theme.colors.button1};
  margin: 4rem 0;
`;
