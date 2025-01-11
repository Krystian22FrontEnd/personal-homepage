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
 console.log(repoData);

  return (
    <FlexContainer>
      <StyledGitIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioParagraph>My recent projects</PortfolioParagraph>
      {/* <Loading/> */}
      <PortfolioContentWrapper>
        <PortfolioContent>
          <PortfolioContentTitle>{repoData.name}</PortfolioContentTitle>
          <PortfolioDescription>
           {repoData.description}
          </PortfolioDescription>
          <GridWrapper>
            <PortfolioParagraphLink>Demo: {repoData.demo}</PortfolioParagraphLink>
            <PortfolioParagraphLink>Code: {repoData.code}</PortfolioParagraphLink>
          </GridWrapper>
        </PortfolioContent>
    </PortfolioContentWrapper>
    <ul>
      <li>
        {JSON.stringify(repoData.homepage)}
      </li>
    </ul>
    </FlexContainer>
  );
};

export default PortfolioSection;
