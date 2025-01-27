import {
  SwitchWrapper,
  StyledSunIcon,
  SwitchContainer,
  SwitchCircle,
  StyledMoonIcon,
  HeaderContainer,
  HeaderImage,
  HeaderColumnWrapper,
  HeaderParagraph,
  HeaderH2,
  HeaderDescription,
  HeaderButton,
  HeaderMessageIcon,
} from "./styled";
import Me from "../../images/meAgain.JPG";
import email from "../PersonalData/email";

const Header = ({ onToggleTheme, isDark }) => {
  return (
    <>
      <SwitchWrapper>
        <StyledSunIcon />
        <SwitchContainer onClick={onToggleTheme}>
          <SwitchCircle $isDark={isDark} />
        </SwitchContainer>
        <StyledMoonIcon />
      </SwitchWrapper>
      <HeaderContainer>
        <HeaderImage src={Me} alt="Krystian Krupiński" />
        <HeaderColumnWrapper>
          <HeaderParagraph>This is</HeaderParagraph>
          <HeaderH2>Krystian Krupiński</HeaderH2>
          <HeaderDescription>
            👨🏻‍💻 "I'm a Frontend Developer who loves to work in React and is
            currently looking for new job opportunities."
          </HeaderDescription>
          <HeaderButton href={`mailto:${email}`}>
            <HeaderMessageIcon />
            Hire me
          </HeaderButton>
        </HeaderColumnWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
