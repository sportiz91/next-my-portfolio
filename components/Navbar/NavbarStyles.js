import styled from "styled-components";

export const NavContainer = styled.section`
  height: 100px;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(6 9 16 / 0.3);
`;

export const PortfolioText = styled.span`
  font-size: 2rem;
  margin-left: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavDivOne = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

export const NavDiv = styled.div`
  display: flex;
  grid-area: ${(props) =>
    props.center ? "1 / 2 / 2 / 10" : "1 / 10 / 2 / 11"};
  justify-content: center;
  justify-self: ${(props) => (props.icons ? "end" : "")};
`;

export const MiddleText = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.links};
  margin-bottom: 5px;
  margin-left: ${(props) => (props.first ? "51px" : "0")};
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
