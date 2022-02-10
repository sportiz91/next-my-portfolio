import styled from "styled-components";

export const PageSection = styled.section`
  opacity: ${(props) => (props.showSection ? "1" : "0")};
  transition: opacity 1.5s;
  transition-delay: 0.4s;
  padding: 0 5rem;
  max-width: 1120px;
  margin-bottom: ${(props) =>
    props.about ? "10rem" : props.footer ? "0" : "25rem"};
`;

export const SectionMiniParagraph = styled.p`
  color: ${(props) =>
    props.project ? props.theme.colors.button6 : props.theme.colors.paragraph};
  margin-bottom: ${(props) =>
    props.project
      ? "0.6rem"
      : props.other || props.nomargin
      ? "0rem"
      : props.margin
      ? "4rem"
      : "2rem"};
  font-weight: ${(props) => (props.blacky ? "700" : "")};
  font-size: ${(props) => (props.other ? "1.2rem" : "")};
  opacity: ${(props) => (props.hidden ? "0" : "1")};
  transition: ${(props) => (props.hidden ? "opacity 0.3s ease" : "")};
`;

export const MiddleText = styled.span`
  font-size: ${({ mobile, footer }) =>
    mobile ? "4rem" : footer ? "1.65rem" : "2rem"};
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) =>
    props.footer ? "0" : "5px"}; /* adjustment to center */
  margin-left: ${(props) => (props.first ? "65px" : "0")};
  transition: color 0.5s ease;
  position: relative;
  cursor: ${(props) => (props.timeline ? "pointer" : "")};
  bottom: ${(props) => (props.adj ? "2.5px" : "")};

  & + .icon {
    color: rgba(255 255 255 / 0.75);
    font-size: 2rem;
    margin-right: 45px;
    position: relative;
    top: 4px;
    transition: color 0.5s ease;
    visibility: hidden;
  }

  & + .icon.mobile {
    font-size: 3rem;
    margin: 0;
  }

  &:hover {
    color: ${(props) => props.theme.colors.button3};
    font-weight: 500;
    left: 6px;

    & + .icon {
      color: ${(props) => props.theme.colors.button3};
      left: 6px;
      visibility: visible;
    }
  }
`;

export const SectionTitleAndLine = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 6rem;
  margin-bottom: 4rem;
`;

export const SectionLine = styled.span`
  width: 100%;
  height: 1px;
  /* background: ${(props) => props.theme.colors.button2}; */
  background: rgba(255 255 255 / 0.5);
  opacity: 0.5;
  margin-top: 15px;
`;

export const SectionParagraphColor = styled.span`
  color: ${(props) => props.theme.colors.button3};
`;

export const SectionTitle = styled.h1`
  font-size: ${(props) => (props.sub || props.welcome ? "5rem" : "7rem")};
  width: ${(props) => (props.notmain ? "auto" : "150%")};
  /* background: linear-gradient(135deg, white 20%, rgba(255 255 255 / 0.66) 60%); */
  /* background: ${(props) =>
    props.projects
      ? "linear-gradient(135deg, white, rgba(255 255 255 / 0.66) 70%)"
      : props.other
      ? "linear-gradient(135deg, white 10%, rgba(255 255 255 / 0.66) 30%)"
      : props.timeline
      ? "linear-gradient(135deg, white, rgba(255 255 255 / 0.66) 30%)"
      : "linear-gradient(135deg, white 20%, rgba(255 255 255 / 0.66) 60%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  color: ${(props) =>
    props.welcome ? props.theme.colors.paragraph : props.theme.colors.links};
  margin-bottom: ${(props) =>
    props.nomargin
      ? "0rem"
      : props.name
      ? "2rem"
      : props.other
      ? "1rem"
      : "4rem"};
`;

export const SectionParagraph = styled.p`
  font-size: 2rem;
  width: 125%;
  color: ${(props) => props.theme.colors.paragraph};
  line-height: 1.6;
  font-weight: 100;
  margin-bottom: 5rem;
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
