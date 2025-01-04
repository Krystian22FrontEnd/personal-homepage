import styled from "styled-components";
import { ReactComponent as GitIcon } from "../icons/mark-github.svg";

export const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const StyledGitIcon = styled(GitIcon)`
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
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
  padding-bottom: 24px;
`;

export const PortfolioContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(592px, 1fr));
  grid-template-rows: repeat(3, minmax(322px, 1fr));
  gap: 32px;
`;

export const PortfolioContent = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.color.darkIron};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.darkViolet};
  color: ${({theme}) => theme.color.scienceBlue};
  display: grid;
  align-items: start;
  padding: 56px;
  gap: 24px;
`;

export const PortfolioContentTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  margin: 0;
`

export const PortfolioDescription = styled.p`
font-size: 18px;
font-weight: 400;
line-height: 25.2px;
margin: 0;
color: ${({theme}) => theme.color.slateGray};
`

export const PortfolioParagraphLink = styled(PortfolioParagraph)`
color: ${({theme}) => theme.color.slateGray};
padding-bottom: 0;
`

export const GridWrapper = styled.div`
display: grid;
gap: 8px;
`