import username from "../../username";
import {
  Wrapper,
  StyledDangerIcon,
  Text,
  Paragraph,
  ButtonLink,
} from "./styled";

const Error = () => {
  return (
    <Wrapper>
      <StyledDangerIcon />
      <Text>Ooops! Something went wrong... </Text>
      <Paragraph>
        Sorry, failed to load Github projects. You can check them directly on
        Github.
      </Paragraph>
      <ButtonLink
        target="_blank"
        rel="noopener noreferrer"
        href={`"https://github.com/${username}"`}
      >
        Go to Github
      </ButtonLink>
    </Wrapper>
  );
};

export default Error;
