import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin-bottom: 72px;
  padding: 32px;
  background-color: ${({ theme }) => theme.sectionBackground};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.portfolio.shadow};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}) {
    margin: 0 16px 72px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
   margin: 0 14px 50px;
   padding: 16px;
  }
`;

export const SectionHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 36.31px;
  margin: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.headerUnderline};
  display: flex;
  gap: 16px;
  align-items: center;
  color: ${({theme}) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
   font-size: 18px;
   line-height: 21.78px;
  }
`;

