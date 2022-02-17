import styled from "styled-components";

export const NavContainer = styled.section`
  height: ${(props) =>
    props.initialLoad
      ? props.state
        ? "105px"
        : "105px"
      : props.roof
      ? "105px"
      : "80px"};
  width: 100%;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  transform: ${(props) =>
    props.scrollDirection === "down" && props.state
      ? "translateY(0)"
      : props.scrollDirection === "down" && !props.state
      ? "translateY(-80px)"
      : "translateY(0)"};
  z-index: 1;
  background-color: ${(props) =>
    props.roof ? props.theme.background.bg1 : props.theme.background.nav};
  backdrop-filter: ${(props) => (props.roof ? "" : "blur(10px)")};
  box-shadow: ${(props) =>
    props.roof ? "" : "0 10px 30px -10px rgb(0 0 0 / 0.75)"};
  transition: 0.4s ease;

  @media ${(props) => props.theme.breakpoints.break650} {
    padding: 0 2rem;
  }

  @media ${(props) => props.theme.breakpoints.break504} {
    padding: 0 2rem 0 1rem;
  }
`;

export const NavDivOne = styled.div``;

export const AnchorLogo = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.links};
  position: relative;
  top: 2.5px;
  cursor: pointer;

  &:hover {
    & span {
      border-bottom: 1px solid ${(props) => props.theme.colors.button3};
    }
  }
`;

export const PortfolioText = styled.span`
  font-size: 2rem;
  margin-left: 8px;

  @media ${(props) => props.theme.breakpoints.break864} {
    font-size: 1.75rem;
    margin-left: 4px;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    font-size: 1.65rem;
  }

  @media ${(props) => props.theme.breakpoints.break339} {
    font-size: 1.5rem;
  }
`;

export const NavDivTwo = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.break768} {
    display: ${(props) => (props.mobileBoolean ? "inline" : "none")};
  }
`;

export const NavNumberWrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  & .icon {
    font-size: 10rem;
  }
`;

export const NavNumberDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavNumber = styled.p`
  font-size: ${(props) => (props.mobile ? "2.5rem" : "1.7rem")};
  color: ${(props) => props.theme.colors.button3};
  display: ${(props) => (props.mobile ? "block" : "inline")};
  margin-right: ${(props) => (props.mobile ? "" : "1.1rem")};
  margin-bottom: ${(props) => (props.mobile ? "0.7rem" : "")};

  @media ${(props) => props.theme.breakpoints.break864} {
    font-size: ${(props) => (props.mobile ? "2.2rem" : "1.5rem")};
  }

  @media ${(props) => props.theme.breakpoints.break650} {
    font-size: 1.7rem;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    font-size: 1.4rem;
  }
`;

export const BurgerDiv = styled.div`
  height: 28px;
  width: 28px;
  position: relative;
  display: none;
  cursor: pointer;
  z-index: 3;
  transform: ${(props) => (props.state ? "rotate(1080deg)" : "")};
  transition: transform 0.5s;

  &:before {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    top: 3px;
    left: 0;
    background-color: ${(props) => props.theme.colors.links};
    transition: transform 0.5s;
    transform: ${(props) =>
      props.state ? "rotate(-45deg) translate(-5px, 8px)" : ""};
  }

  &:after {
    content: "";
    position: absolute;
    height: 3px;
    width: ${(props) => (props.state ? "100%" : "80%")};
    bottom: 4px;
    left: 0;
    background-color: ${(props) => props.theme.colors.links};
    transition: transform 0.5s;
    transform: ${(props) =>
      props.state ? "rotate(45deg) translate(-5px, -7px)" : ""};
  }
  }

  @media ${(props) => props.theme.breakpoints.break768} {
    display: inline;
  }
`;

export const BurgerSpan = styled.span`
  position: absolute;
  top: 12px;
  height: 3px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.links};
  z-index: 2;
  display: ${(props) => (props.state ? "none" : "inline")};
`;

export const HiddenNavbar = styled.section`
  display: none;
  position: fixed;
  top: 0;
  right: ${(props) => (props.state ? "0" : "-100vh")};
  height: 100vh;
  width: 50vw;
  min-width: 180px;
  padding-top: 20vh;
  z-index: 2;
  background-color: rgba(26 39 64 / 1);
  box-shadow: 0 0 25px 0 rgb(0 0 0 / 0.25);
  transition: right 0.5s;

  @media ${(props) => props.theme.breakpoints.break864} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7rem;
  }
`;

export const DivWrapper = styled.div`
  position: relative;
  transition: left 0.2s linear;
  /* left: ${(props) => (props.state ? "0%" : "100%")}; */
  left: ${(props) =>
    props.middle && props.state
      ? "0%"
      : props.middle
      ? "-100%"
      : props.state
      ? "0%"
      : "100%"};

  &:nth-child(1) {
    transition-delay: 1.2s; /* first we have to finish the nav scroll down effect */
  }

  &:nth-child(2) {
    transition-delay: 1.3s;
  }

  &:nth-child(3) {
    transition-delay: 1.4s;
  }
`;
