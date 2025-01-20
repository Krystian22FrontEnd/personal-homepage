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
import poster from "../../images/poster.png";
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
        <HeaderImage src={poster} alt="poster" />
        <HeaderColumnWrapper>
          <HeaderParagraph>This is</HeaderParagraph>
          <HeaderH2>Krystian Krupiński</HeaderH2>
          <HeaderDescription>
            👨🏻‍💻 I'm a passionate Frontend Developer in love with React, currently
            looking for new job opportunities.
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
