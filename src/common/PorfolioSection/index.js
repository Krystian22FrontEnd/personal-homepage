import {
  FlexContainer,
  StyledGitIcon,
  PortfolioHeader,
  PortfolioParagraph,
  PortfolioContentWrapper,
  PortfolioContent,
  PortfolioContentTitle,
  PortfolioDescription,
  PortfolioParagraphLink,
  GridWrapper,
} from "./styled";
import Loading from "../Loading";
import { useRepoData } from "../../useRepoData";

const PortfolioSection = () => {
  const repoData = useRepoData({ username: "Krystian22FrontEnd" });
  console.log(repoData.data);

  return (
    <FlexContainer>
      <StyledGitIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioParagraph>My recent projects</PortfolioParagraph>
      {/* <Loading/> */}
      <PortfolioContentWrapper>
        <PortfolioContent>
          <PortfolioContentTitle>{repoData.name}</PortfolioContentTitle>
          <PortfolioDescription>{repoData.desc}</PortfolioDescription>
          <GridWrapper>
            <PortfolioParagraphLink>Demo: {repoData.url}</PortfolioParagraphLink>
            <PortfolioParagraphLink>Code: </PortfolioParagraphLink>
          </GridWrapper>
        </PortfolioContent>
      </PortfolioContentWrapper>
      <ul>
        <li>
        </li>
      </ul>
    </FlexContainer>
  );
};

export default PortfolioSection;
