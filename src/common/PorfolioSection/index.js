import {
  FlexContainer,
  StyledGitIcon,
  PortfolioHeader,
  PortfolioParagraph,
  PortfolioList,
  PortfolioListContent,
  PortfolioDescription,
  PortfolioParagraphLink,
  PortfolioLink,
  GridWrapper,
  PortfolioName,
} from "./styled";
import Loading from "../Loading";
import { useRepoData } from "../../useRepoData";
import username from "./username";

const PortfolioSection = () => {
  const repoData = useRepoData({ username });
  console.log(repoData);

  return (
    <FlexContainer>
      <StyledGitIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioParagraph>My recent projects</PortfolioParagraph>
      {repoData.status === "loading" ? <Loading/> : (
        <PortfolioList>
        { repoData.data.map(
          (repos) =>
            (repos = (
              <PortfolioListContent key={repos.id}>
                <PortfolioName>{repos.name}</PortfolioName>
                <PortfolioDescription>{repos.description}</PortfolioDescription>
                <GridWrapper>
                  <PortfolioParagraphLink>
                    Demo:{" "}
                    <PortfolioLink
                      target="_blank"
                      rel="noreferrer"
                      href={repos.homepage}
                    >
                      {repos.homepage}
                    </PortfolioLink>
                  </PortfolioParagraphLink>
                  <PortfolioParagraphLink>
                    Code:{" "}
                    <PortfolioLink target="_blank" rel="noreferrer" href={repos.html_url}>
                      {repos.html_url}
                    </PortfolioLink>
                  </PortfolioParagraphLink>
                </GridWrapper>
              </PortfolioListContent>
            ))
        )}
      </PortfolioList>
      )}
      
    </FlexContainer>
  );
};

export default PortfolioSection;
