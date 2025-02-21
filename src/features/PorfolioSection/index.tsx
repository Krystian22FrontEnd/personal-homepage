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
import Error from "../Error";
import { useRepoData } from "../../useRepoData";

const PortfolioSection = () => {
  const repoData = useRepoData();

  return (
    <FlexContainer>
      <StyledGitIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioParagraph>My recent projects</PortfolioParagraph>
      {repoData.status === "loading" ? (
        <Loading />
      ) : repoData.status === "error" ? (
        <Error />
      ) : (
        <PortfolioList>
          {repoData.data.map((repo) => (
            <PortfolioListContent key={repo.id}>
              <PortfolioName>{repo.name}</PortfolioName>
              <PortfolioDescription>{repo.description}</PortfolioDescription>
              <GridWrapper>
                <PortfolioParagraphLink>
                  Demo:{" "}
                  <PortfolioLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href={repo.homepage}
                  >
                    {repo.homepage}
                  </PortfolioLink>
                </PortfolioParagraphLink>
                <PortfolioParagraphLink>
                  Code:{" "}
                  <PortfolioLink
                    target="_blank"
                    rel="noreferrer"
                    href={repo.html_url}
                  >
                    {repo.html_url}
                  </PortfolioLink>
                </PortfolioParagraphLink>
              </GridWrapper>
            </PortfolioListContent>
          ))}
        </PortfolioList>
      )}
    </FlexContainer>
  );
};

export default PortfolioSection;
