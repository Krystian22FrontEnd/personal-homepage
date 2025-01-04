import {
  Span,
  HeaderSwitchButton,
  HeaderSwitchButtonWrapper,
  HeaderToggleOffIcon,
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

const Header = () => {
  return (
    <>
      <HeaderSwitchButtonWrapper>
        <HeaderSwitchButton>
          <Span>DARK MODE OFF</Span> <HeaderToggleOffIcon />
        </HeaderSwitchButton>
      </HeaderSwitchButtonWrapper>
      <HeaderContainer>
        <HeaderImage src={poster} alt="poster" />
        <HeaderColumnWrapper>
          <HeaderParagraph>This is</HeaderParagraph>
          <HeaderH2>Krystian Krupiński</HeaderH2>
          <HeaderDescription>
            👨🏻‍💻 I'm a passionate Frontend Developer in love with React, currently
            looking for new job opportunities.
          </HeaderDescription>
          <HeaderButton>
            <HeaderMessageIcon />
            Hire me
          </HeaderButton>
        </HeaderColumnWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
