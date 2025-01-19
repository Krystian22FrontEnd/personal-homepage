import styled from "styled-components";
import { ReactComponent as GitIcon } from "../../icons/mark-github.svg";

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}) {
   margin: 0 16px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
   margin: 0 16px 0 16px;
  }
`;

export const StyledGitIcon = styled(GitIcon)`
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  fill: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
  }
`;

export const PortfolioHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 36.31px;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  padding-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    line-height: 21.78px;
    padding-bottom: 16px;
  }
`;

export const PortfolioParagraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
  color: ${({theme}) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 17px;
    line-height: 23.8px;
  }
`;

export const PortfolioList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 32px;
  margin-top: 24px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const PortfolioListContent = styled.li`
  background-color: ${({ theme }) => theme.sectionBackground};
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.portfolio.border};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.portfolio.shadow};
  padding: 56px;
  list-style-type: none;
  display: grid;
  gap: 24px;

  &:hover {
    border: 6px solid ${({ theme }) => theme.portfolio.borderHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 24px;
    gap: 16px;
  }
`;

export const PortfolioName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  margin: 0;
  color: ${({ theme }) => theme.portfolio.header};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 19.36px;
  }
`;

export const PortfolioDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  margin: 0;
  color: ${({ theme }) => theme.site.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 16.94px;
  }
`;

export const PortfolioParagraphLink = styled(PortfolioDescription)`
  color: ${({ theme }) => theme.site.textSecondary};
  display: grid;
  grid-template-columns: 64px 1fr;
  padding-bottom: 0;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    line-height: 1.2;
    grid-template-columns: 48px 1fr;
  }
`;

export const PortfolioLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 2px;
  }
`;
