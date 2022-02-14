import styled from "styled-components";

export const FooterSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  border-top: 1px solid rgba(255 255 255 / 0.1);
  padding-top: 5rem;
`;

export const FooterOrBannerDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.banner ? "space-between" : "")};
  align-items: center;
`;

export const FooterMobileOrMailDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
