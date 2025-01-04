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

const PortfolioSection = () => {
  return (
    <FlexContainer>
      <StyledGitIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioParagraph>My recent projects</PortfolioParagraph>
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
        <PortfolioContent>
          <PortfolioContentTitle>To-do-list-react</PortfolioContentTitle>
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
        <PortfolioContent>
          <PortfolioContentTitle>To-do-list</PortfolioContentTitle>
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
        <PortfolioContent>
          <PortfolioContentTitle>
            Currency converter-react
          </PortfolioContentTitle>
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
        <PortfolioContent>
          <PortfolioContentTitle>Currency converter</PortfolioContentTitle>
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
        <PortfolioContent>
          <PortfolioContentTitle>Homepage</PortfolioContentTitle>
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
    </FlexContainer>
  );
};

export default PortfolioSection;
