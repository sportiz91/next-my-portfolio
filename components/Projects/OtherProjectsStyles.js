import styled from "styled-components";

export const OtherProjectsDiv = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(305px, 1fr));
  gap: 1.5rem;

  @media ${(props) => props.theme.breakpoints.break1280} {
    margin: 5rem 2rem 0;
  }

  @media ${(props) => props.theme.breakpoints.break931} {
    margin: 5rem 8rem 0;
  }

  @media ${(props) => props.theme.breakpoints.break864} {
    margin: 5rem 5rem 0;
  }

  @media ${(props) => props.theme.breakpoints.break768} {
    margin: 5rem 8rem 0;
  }

  @media ${(props) => props.theme.breakpoints.break621} {
    margin: 5rem 5rem 0;
  }

  @media ${(props) => props.theme.breakpoints.break570} {
    margin: 5rem 3rem 0;
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 5rem 1.5rem 0;
  }
`;

export const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  background: rgba(26 39 64 / 0.9);
  text-alignment: start;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 0 50px 2px rgb(0 0 0 / 0.1);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media ${(props) => props.theme.breakpoints.break422} {
    padding: 2rem;
  }
`;

export const ProjectLinksDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-bottom: 3rem;

  & .icon {
    font-size: 2.5rem;
  }

  & .icon.folder {
    font-size: 2.7rem;
    color: ${(props) => props.theme.colors.button3};
  }

  & a {
    color: ${(props) => props.theme.colors.paragraph};
    transition: 0.5s ease;

    &:hover {
      color: ${(props) => props.theme.colors.button3};
    }
  }
`;

export const ProjectLinksSourceDiv = styled.div`
  display: flex;
  gap: 1.5rem;
`;
