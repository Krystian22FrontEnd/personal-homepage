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
  const username = "Krystian22FrontEnd"
//  const repoData = useRepoData(username);
 const repoData = useRepoData({ username: "Krystian22FrontEnd" });
 console.log(repoData.description);

  return (
    <FlexContainer>
      <StyledGitIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioParagraph>My recent projects</PortfolioParagraph>
      {/* <Loading/> */}
      <PortfolioContentWrapper>
        <PortfolioContent>
          <PortfolioContentTitle>Movie Browser</PortfolioContentTitle>
          <PortfolioDescription>
            Project description, e.g. website where you can search for favourite
            movies and people. Project description, e.g. website where you can
            search.
          </PortfolioDescription>
          <GridWrapper>
            <PortfolioParagraphLink>Demo:</PortfolioParagraphLink>
            <PortfolioParagraphLink>Code:</PortfolioParagraphLink>
          </GridWrapper>
        </PortfolioContent>
    </PortfolioContentWrapper>
    <ul>
      <li>
        {JSON.stringify(repoData.description)}
      </li>
    </ul>
    </FlexContainer>
  );
};

export default PortfolioSection;
