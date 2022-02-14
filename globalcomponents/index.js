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

export const SectionParagraph = styled.p`
  font-size: 2rem;
  max-width: 600px;
  color: ${(props) => props.theme.colors.paragraph};
  line-height: 1.6;
  font-weight: 100;
  margin-bottom: 5rem;
`;

export const SectionMiniParagraph = styled.p`
  color: ${(props) =>
    props.blue ? props.theme.colors.button3 : props.theme.colors.paragraph};
  margin-bottom: ${(props) =>
    props.project
      ? "0.6rem"
      : props.other || props.nomargin
      ? "0rem"
      : props.welcome
      ? "2rem"
      : "2rem"};
  font-weight: ${(props) => (props.blacky ? "700" : "")};
  font-size: ${(props) => (props.other ? "1.2rem" : "")};
  opacity: ${(props) => (props.hidden ? "0" : "1")};
  transition: ${(props) => (props.hidden ? "opacity 0.3s ease" : "")};
`;

export const AnchorNavMenuOrShow = styled.a`
  position: relative;
  cursor: pointer;

  & .icon {
    color: rgba(255 255 255 / 0.75);
    font-size: 1.75rem;
    margin-right: 25px;
    position: relative;
    top: 4px;
    visibility: hidden;
    transition: color 0.5s ease;
  }

  & .icon.mobile {
    font-size: 3rem;
    margin: 0;
  }

  &:hover {
    left: 6px;

    & span {
      color: ${(props) => props.theme.colors.button3};
    }

    & .icon {
      color: ${(props) => props.theme.colors.button3};
      left: 2px;
      left: ${(props) => (props.show ? "7px" : "2px")};
      visibility: visible;
    }
  }
`;

export const MiddleText = styled.span`
  font-size: ${({ mobile, footer }) =>
    mobile ? "4rem" : footer ? "1.65rem" : "1.8rem"};
  color: ${(props) => props.theme.colors.links};
  position: relative;
  bottom: ${(props) => (props.adj ? "2.5px" : "")};
  cursor: ${(props) => (props.timeline ? "pointer" : "")};
  transition: color 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.colors.button3};
    left: ${(props) => (props.nav ? "" : "6px")};
  }
`;

export const ProjectInfoOrTechName = styled.p`
  font-size: ${(props) =>
    props.other ? "2rem" : props.tech ? "1.5rem" : "2.3rem"};
  color: ${(props) =>
    props.paragraph
      ? props.theme.colors.paragraph
      : props.blue
      ? props.theme.colors.button3
      : props.theme.colors.links};
  font-weight: ${(props) => (props.tech ? "400" : "700")};
`;

export const DivSocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.socials ? "40px" : null)};
  right: ${(props) => (props.contact ? "40px" : null)};
`;

export const LineSocials = styled.span`
  height: 160px;
  width: 1px;
  margin-top: 2rem;
  background: ${(props) => props.theme.colors.links};
`;

export const AnchorSocials = styled.a`
  color: ${(props) => props.theme.colors.links};
  font-size: 2rem;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const DivSocialsIcon = styled.div`
  padding: 6px 6px 1px;
  background-color: transparent;
  border-radius: 20px;
  transform: scale(1);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #212d45;
    color: ${(props) => props.theme.colors.button3};
    transform: scale(1.05);
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
  background: ${(props) => props.theme.colors.links};
  opacity: 0.2;
  margin-top: 15px;
`;

export const SectionParagraphColor = styled.span`
  color: ${(props) => props.theme.colors.button3};
`;

export const SectionTitle = styled.h1`
  font-size: ${(props) =>
    props.welcome ? "7rem" : props.sub ? "5rem" : "3.5rem"};
  color: ${(props) =>
    props.blue
      ? props.theme.colors.button3
      : props.primary
      ? props.theme.colors.primary
      : props.links
      ? props.theme.colors.links
      : props.theme.colors.paragraph};
  margin-bottom: ${(props) =>
    props.nomargin
      ? "0rem"
      : props.welcome
      ? "1.5rem"
      : props.other
      ? "1rem"
      : "4rem"};
`;

export const SectionDivSeparator = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SectionSeparator = styled.hr`
  height: 1px;
  width: 200px;
  border: 0;
  background: ${(props) => props.theme.colors.links};
  opacity: 0.2;
  margin: 7rem 0 10rem;
`;

export const SpanUnderline = styled.span`
  border-bottom: 3px solid ${(props) => props.theme.colors.button2};
`;
