/*
  Styled components for Projects Section
*/

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
  display: grid;
  align-items: center;
  height: fit-content;
  margin: 0 4.4rem;

  & .icon {
    color: ${(props) => props.theme.colors.links};
    width: 100%;
  }

  & :nth-child(1) {
    & .first {
      margin-top: 2rem; /* adjustment */
    }
  }

  @media ${(props) => props.theme.breakpoints.break997} {
    grid-template-columns: 190px 1fr;
    align-items: start;
    margin: 0;
    gap: 4rem;
  }

  @media ${(props) => props.theme.breakpoints.break585} {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const TechLogoAndNameWrapper = styled.div`
  @media ${(props) => props.theme.breakpoints.break997} {
    margin: 0 3rem;
  }
`;

export const TechNameAndButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;

  & p {
    text-align: center;
  }
`;

export const TechInfoTechnologiesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 2rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.break997} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  @media ${(props) => props.theme.breakpoints.break585} {
    justify-content: center;
  }
`;

export const TechNameAndArrowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & .icon {
    color: ${(props) => props.theme.colors.button3};
    margin-right: 5px;
    opacity: 0.7;
    flex-basis: 20%;
  }

  & p {
    flex-basis: 80%;
  }

  @media ${(props) => props.theme.breakpoints.break997} {
    width: auto;

    & .icon {
      flex-basis: auto;
      max-width: 16px;
    }

    & p {
      flex-basis: auto;
    }
  }

  @media ${(props) => props.theme.breakpoints.break585} {
    & .icon {
      max-width: 13px;
      margin-bottom: 2px;
    }
  }
`;
