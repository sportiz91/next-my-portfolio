import styled from "styled-components";

export const TechInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7rem 0 2rem;

  @media ${(props) => props.theme.breakpoints.break997} {
    flex-direction: column;
    align-items: start;
    gap: 5rem;
  }
`;

export const TechInfoIntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 4.4rem;
  min-width: 150px;

  & .icon {
    color: ${(props) => props.theme.colors.links};
  }

  & :nth-child(1) {
    & .first {
      margin-top: 2rem;
    }
  }
`;

export const TechNameAndButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
`;

export const TechInfoTechnologiesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 2rem;
  width: 100%;
`;

export const TechNameAndArrowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & .icon {
    color: ${(props) => props.theme.colors.button3};
    margin-right: 5px;
    opacity: 0.7;
    flex-basis: 20%;
  }

  & p {
    flex-basis: 80%;
  }
`;
