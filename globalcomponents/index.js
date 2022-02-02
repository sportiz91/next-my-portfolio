import styled from "styled-components";

export const SectionMiniParagraph = styled.p`
  color: ${(props) => props.theme.colors.primary1};
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h1`
  font-size: ${(props) => (props.sub ? "5rem" : "7rem")};
  width: 150%;
  /* background: linear-gradient(135deg, white 20%, rgba(255 255 255 / 0.66) 60%); */
  background: ${(props) =>
    props.projects
      ? "linear-gradient(135deg, white, rgba(255 255 255 / 0.66) 10%)"
      : "linear-gradient(135deg, white 20%, rgba(255 255 255 / 0.66) 60%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${(props) => (props.name ? "2rem" : "4rem")};
`;

export const SectionParagraph = styled.p`
  font-size: 2.4rem;
  width: 125%;
  color: ${(props) => props.theme.colors.paragraph};
  line-height: 1.75;
  font-weight: 100;
  margin-bottom: 3rem;
`;

export const SectionSeparator = styled.hr`
  height: 5px;
  width: 100px;
  border: 0;
  background: ${(props) => props.theme.colors.button1};
  margin: 4rem 0;
`;

export const SpanUnderline = styled.span`
  border-bottom: 3px solid ${(props) => props.theme.colors.button2};
`;
