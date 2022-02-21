import styled from "styled-components";

export const PageSection = styled.section`
  opacity: ${(props) => (props.showSection ? "1" : "0")};
  transition: opacity 1.5s;
  transition-delay: 0.4s;
  padding: 0 5rem;
  max-width: 1120px;
  margin-bottom: ${(props) =>
    props.about ? "10rem" : props.footer ? "0" : "25rem"};

  @media ${(props) => props.theme.breakpoints.break1146} {
    padding: 0 2.5rem;
  }

  @media ${(props) => props.theme.breakpoints.break768} {
    padding: 0;
  }
`;

export const SectionParagraph = styled.p`
  font-size: 2rem;
  max-width: 600px;
  color: ${(props) => props.theme.colors.paragraph};
  line-height: 1.6;
  font-weight: 100;
  margin-bottom: 5rem;

  @media ${(props) => props.theme.breakpoints.break1081} {
    font-size: 1.8rem;
    max-width: 650px;
  }

  @media ${(props) => props.theme.breakpoints.break864} {
    font-size: ${(props) => (props.tech ? "1.7rem" : "1.6rem")};
    line-height: 1.5;
    max-width: 550px;
  }

  @media ${(props) => props.theme.breakpoints.break504} {
    font-size: ${(props) => (props.tech ? "1.6rem" : "1.4rem")};
    max-width: 400px;
    margin-bottom: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    font-size: ${(props) => (props.tech ? "1.45rem" : "1.3rem")};
  }

  @media ${(props) => props.theme.breakpoints.break339} {
    font-size: ${(props) => (props.tech ? "1.3rem" : "1.1rem")};
  }
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
  font-size: ${(props) => (props.other ? "1.2rem" : props.tag ? "1.4rem" : "")};
  opacity: ${(props) => (props.hidden ? "0" : "1")};
  transition: ${(props) => (props.hidden ? "opacity 0.3s ease" : "")};

  @media ${(props) => props.theme.breakpoints.break504} {
    font-size: ${(props) =>
      props.other
        ? "1.2rem"
        : props.tag
        ? "1.4rem"
        : props.footer
        ? "1.4rem"
        : "1.3rem"};
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    font-size: ${(props) =>
      props.other
        ? "1.2rem"
        : props.tag
        ? "1.4rem"
        : props.footer
        ? "1.2rem"
        : "1.3rem"};

    text-align: ${(props) => (props.footer ? "center" : "")};
  }

  @media ${(props) => props.theme.breakpoints.break339} {
    font-size: ${(props) =>
      props.other ? "1.2rem" : props.tag ? "1.4rem" : "1.2rem"};
  }
`;

export const AnchorNavMenuOrShow = styled.a`
  position: relative;
  cursor: pointer;
  margin-left: ${(props) => (props.mobile ? "17px" : "")}; /* scroll width */

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
    font-size: 2.3rem;
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
      visibility: visible;
    }
  }

  @media ${(props) => props.theme.breakpoints.break650} {
    .icon.mobile {
      font-size: 1.8rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    .icon.view {
      font-size: 1.6rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    .icon.view {
      font-size: 1.5rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.break460} {
    margin-left: ${(props) => (props.show ? "" : "30px")};
  }
`;

export const MiddleText = styled.span`
  font-size: ${({ mobile, footer, view }) =>
    mobile ? "3rem" : footer ? "1.65rem" : view ? "1.8rem" : "1.8rem"};
  color: ${(props) => props.theme.colors.links};
  position: relative;
  bottom: ${(props) => (props.adj ? "2.5px" : "")};
  cursor: ${(props) => (props.timeline ? "pointer" : "")};
  transition: color 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.colors.button3};
    left: ${(props) => (props.footer ? "6px" : "")};
  }

  @media ${(props) => props.theme.breakpoints.break864} {
    font-size: ${({ mobile, footer, view }) =>
      mobile ? "2.4rem" : footer ? "1.65rem" : view ? "1.8rem" : "1.6rem"};
  }
  }

  @media ${(props) => props.theme.breakpoints.break650} {
    font-size: ${({ mobile, footer, view }) =>
      mobile ? "2rem" : footer ? "1.65rem" : view ? "1.8rem" : "1.8rem"};
  }

  @media ${(props) => props.theme.breakpoints.break504} {
    font-size: ${({ mobile, footer, view }) =>
      mobile ? "2rem" : footer ? "1.4rem" : view ? "1.7rem" : "1.8rem"}
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    font-size: ${({ mobile, footer, view }) =>
      mobile ? "1.65rem" : footer ? "1.4rem" : view ? "1.5rem" : "1.8rem"};
  }

  @media ${(props) => props.theme.breakpoints.break339} {
    font-size: ${({ mobile, footer, view }) =>
      mobile ? "1.65rem" : footer ? "1.4rem" : view ? "1.4rem" : "1.8rem"};
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

  @media ${(props) => props.theme.breakpoints.break768} {
    font-size: ${(props) =>
      props.other ? "2rem" : props.tech ? "1.5rem" : "2rem"};
  }

  @media ${(props) => props.theme.breakpoints.break585} {
    font-size: ${(props) =>
      props.other ? "2rem" : props.tech ? "1.3rem" : "2rem"};
  }

  @media ${(props) => props.theme.breakpoints.break504} {
    font-size: ${(props) =>
      props.other ? "1.85rem" : props.tech ? "1.3rem" : "1.85rem"};
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    font-size: ${(props) =>
      props.other ? "1.6rem" : props.tech ? "1.2rem" : "1.5rem"};
  }
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

  @media ${(props) => props.theme.breakpoints.break1330} {
    left: ${(props) => (props.socials ? "35px" : null)};
    right: ${(props) => (props.contact ? "35px" : null)};
  }

  @media ${(props) => props.theme.breakpoints.break768} {
    display: ${(props) => (props.vertical ? "" : "none")};
  }
`;

export const DivSocialsHorizontal = styled.div`
  display: flex;
  justify-content: center;
  justify-self: end;
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

  & .icon {
    font-size: 2.9rem;
  }

  &:hover {
    background-color: #212d45;
    color: ${(props) => props.theme.colors.button3};
    transform: scale(1.05);
  }

  @media ${(props) => props.theme.breakpoints.break650} {
    & .icon {
      font-size: 2.5rem;
    }
  }
`;

export const SectionTitleAndLine = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 6rem;
  margin-bottom: 4rem;

  @media ${(props) => props.theme.breakpoints.break864} {
    gap: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    gap: 1rem;
  }
`;

export const SectionLine = styled.span`
  width: 100%;
  height: 1px;
  /* background: ${(props) => props.theme.colors.button2}; */
  background: ${(props) => props.theme.colors.links};
  opacity: 0.2;
  margin-top: 9px;

  @media ${(props) => props.theme.breakpoints.break504} {
    margin-top: 5px;
  }
`;

export const SectionParagraphColor = styled.span`
  color: ${(props) => props.theme.colors.button3};
`;

export const SectionTitle = styled.h1`
  font-size: ${(props) =>
    props.welcome
      ? "7rem"
      : props.sub
      ? "5rem"
      : props.title
      ? "5rem"
      : "3.5rem"};
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

  @media ${(props) => props.theme.breakpoints.break1081} {
    font-size: ${(props) =>
      props.welcome
        ? "7rem"
        : props.sub
        ? "4.5rem"
        : props.title
        ? "4.5rem"
        : "3.5rem"};
  }

  @media ${(props) => props.theme.breakpoints.break864} {
    font-size: ${(props) =>
      props.welcome
        ? "6.5rem"
        : props.sub
        ? "4.5rem"
        : props.title
        ? "4.5rem"
        : "3.5rem"};
  }

  @media ${(props) => props.theme.breakpoints.break800} {
    font-size: ${(props) =>
      props.welcome
        ? "6.5rem"
        : props.sub
        ? "4.2rem"
        : props.title
        ? "4.5rem"
        : "3.5rem"};
  }
  }

  @media ${(props) => props.theme.breakpoints.break768} {
    font-size: ${(props) =>
      props.welcome
        ? "5.8rem"
        : props.sub
        ? "3.6rem"
        : props.title
        ? "4.2rem"
        : "3.2rem"};
  }

  @media ${(props) => props.theme.breakpoints.break650} {
    font-size: ${(props) =>
      props.welcome
        ? "4.7rem"
        : props.sub
        ? "3.1rem"
        : props.title
        ? "3.7rem"
        : "2.7rem"};
  }

  @media ${(props) => props.theme.breakpoints.break504} {
    font-size: ${(props) =>
      props.welcome
        ? "4.2rem"
        : props.sub
        ? "2.9rem"
        : props.title
        ? "3.3rem"
        : "2.5rem"};

      margin-bottom: ${(props) =>
        props.nomargin
          ? "0rem"
          : props.welcome
          ? "1.5rem"
          : props.other
          ? "1rem"
          : "3rem"};
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    font-size: ${(props) =>
      props.welcome
        ? "3.5rem"
        : props.sub
        ? "2.2rem"
        : props.title
        ? "2.7rem"
        : "2.1rem"};
  }

  @media ${(props) => props.theme.breakpoints.break339} {
    font-size: ${(props) =>
      props.welcome
        ? "3.1rem"
        : props.sub
        ? "1.9rem"
        : props.title
        ? "2.4rem"
        : "1.9rem"};
  }
`;

export const SectionDivSeparator = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SectionSeparator = styled.hr`
  height: 1px;
  width: 40%;
  max-width: 350px;
  border: 0;
  background: ${(props) => props.theme.colors.links};
  opacity: 0.2;
  margin: 7rem 0 10rem;
  margin: ${(props) => (props.about ? "2rem 0 10rem" : "7rem 0 10rem")};

  @media ${(props) => props.theme.breakpoints.break504} {
    margin: 7rem;
  }
`;

export const SpanUnderline = styled.span`
  border-bottom: 3px solid ${(props) => props.theme.colors.button2};
`;
