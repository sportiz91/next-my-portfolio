import styled from "styled-components";

export const OtherProjectsDiv = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(305px, 1fr));
  gap: 3rem;
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
`;

export const ProjectLinksDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-bottom: 3rem;

  & .icon {
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
