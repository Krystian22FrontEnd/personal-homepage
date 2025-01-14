import styled from "styled-components";
import { ReactComponent as GitIcon } from "../../icons/mark-github.svg";

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const StyledGitIcon = styled(GitIcon)`
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  fill: ${({ theme }) => theme.color.scienceBlue};
`;

export const PortfolioHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 36.31px;
  color: ${({ theme }) => theme.color.mineShaft};
  margin: 0;
  padding-bottom: 8px;
`;

export const PortfolioParagraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
`;

export const PortfolioList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 32px;
  margin-top: 24px;
  padding: 0;
`;

export const PortfolioListContent = styled.li`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.color.darkIron};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.darkViolet};
  padding: 56px;
  list-style-type: none;
  display: grid;
  gap: 24px;

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.jordyBlue};
  }
`;

export const PortfolioName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  margin: 0;
  color: ${({ theme }) => theme.color.scienceBlue};
`;

export const PortfolioDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  margin: 0;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const PortfolioParagraphLink = styled(PortfolioDescription)`
  color: ${({ theme }) => theme.color.slateGray};
  display: grid;
  grid-template-columns: 64px 1fr;
  padding-bottom: 0;
  line-height: 1.6;
`;

export const PortfolioLink = styled.a`
  color: ${({ theme }) => theme.color.scienceBlue};
  text-decoration: none;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  gap: 8px;
`;
