import styled from "styled-components";

export const NavContainer = styled.section`
  height: 100px;
  width: 100%;
  padding: 0 3rem;
  display: grid;
  position: fixed;
  grid-template-columns: repeat(10, 1fr);
  grid-template-areas: "logo menu menu menu menu menu menu menu menu socials";
  align-items: center;
  border-bottom: 1px solid rgba(208 187 87 / 0.3);
  /* background-color: rgba(6 9 16 / 0.3); */
  background-color: rgba(0 0 0 / 0.9);

  @media ${(props) => props.theme.breakpoints.break864} {
    grid-template-columns: 1fr repeat(8, 1fr) minmax(131.09px, 1fr);
    grid-template-areas: "logo socials socials socials socials socials socials socials socials burger";
  }
`;

export const PortfolioText = styled.span`
  font-size: 2rem;
  margin-left: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavDivOne = styled.div`
  grid-area: logo;
`;

export const NavDivTwo = styled.div`
  grid-area: menu;
  display: flex;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.break864} {
    display: ${(props) => (props.mobileBoolean ? "inline" : "none")};
  }
`;

export const NavDivThree = styled.div`
  grid-area: socials;
  display: flex;
  justify-content: center;
  justify-self: end;

  @media ${(props) => props.theme.breakpoints.break864} {
    position: fixed;
    flex-direction: column;
    top: 78%;
    left: 2.55%;
  }
`;

export const MiddleText = styled.span`
  font-size: ${({ mobile }) => (mobile ? "4rem" : "2rem")};
  color: ${(props) => props.theme.colors.links};
  margin-bottom: 5px; /* adjustment to center */
  margin-left: ${(props) => (props.first ? "65px" : "0")};
  transition: color 0.5s ease;
  position: relative;

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
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
    left: 6px;

    & + .icon {
      color: rgba(255 255 255 / 1);
      left: 6px;
      visibility: visible;
    }
  }
`;

export const IconDiv = styled.div`
  padding: 6px 6px 1px;
  background-color: transparent;
  border-radius: 20px;
  transform: scale(1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #212d45;
    transform: scale(1.15);
  }
`;

export const AnchorNav = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
`;

export const BurgerDiv = styled.div`
  grid-area: burger;
  height: 28px;
  width: 28px;
  top: 3.6rem;
  right: 30px;
  cursor: pointer;
  position: fixed;
  display: none;
  z-index: 2;
  transition: transform 1.2s;
  transform: ${(props) => (props.state ? "rotate(1080deg)" : "")};

  &:before {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    top: 3px;
    left: 0;
    /* background-color: white; */
    /* 6b3030 */
    background-color: ${(props) =>
      props.state ? "rgba(255 255 255 / 0.75)" : "white"};
    transition: transform 1.2s, background-color 1.2s;
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
    /* background-color: white; */
    /* 6b3030 */
    background-color: ${(props) =>
      props.state ? "rgba(255 255 255 / 0.75)" : "white"};
    transition: transform 1.2s, background-color 1.2s;
    transform: ${(props) =>
      props.state ? "rotate(45deg) translate(-5px, -7px)" : ""};
  }
  }

  @media ${(props) => props.theme.breakpoints.break864} {
    display: inline;
    justify-self: end;
  }
`;

export const BurgerSpan = styled.span`
  position: absolute;
  top: 12px;
  height: 3px;
  width: 100%;
  /* background-color: white; */
  /* 6b3030 */
  background-color: ${(props) =>
    props.state ? "rgba(255 255 255 / 0.75)" : "white"};
  z-index: 2;
  display: ${(props) => (props.state ? "none" : "inline")};
`;

export const HiddenNavbar = styled.section`
  position: absolute;
  min-height: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgba(0 0 0 / 0.98);
  top: ${(props) => (props.state ? "0%" : "-100%")};
  transition: top 1.2s linear;
`;

export const NavDivHidden = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7rem;
  padding-top: 31vh;
  position: fixed;
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
