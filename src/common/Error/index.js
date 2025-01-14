import github from "../PersonalData/github";
import {
  ErrorWrapper,
  StyledDangerIcon,
  ErrorHeader,
  ErrorParagraph,
  ErrorButtonLink,
} from "./styled";


const Error = () => {
  return (
    <ErrorWrapper>
      <StyledDangerIcon />
      <ErrorHeader>Ooops! Something went wrong... </ErrorHeader>
      <ErrorParagraph>
        Sorry, failed to load Github projects. You can check them directly on
        Github.
      </ErrorParagraph>
      <ErrorButtonLink
        target="_blank"
        rel="noopener noreferrer"
        href={github}
      >
        Go to Github
      </ErrorButtonLink>
    </ErrorWrapper>
  );
};

export default Error;
