import {
  Span,
  ActualButton,
  HeaderSwitchButton,
  HeaderToggleOffButton,
  HeaderContainer,
  HeaderImage,
  HeaderColumnWrapper,
  HeaderParagraph,
  HeaderH2,
  HeaderDescription,
  HeaderButton,
  HeaderMessageIcon,
} from "./styled";
import poster from "../images/poster.png";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderSwitchButton>
        <ActualButton>
        <Span>DARK MODE OFF</Span> <HeaderToggleOffButton />
        </ActualButton>
      </HeaderSwitchButton>
      <HeaderColumnWrapper>
        <HeaderImage src={poster} alt="poster" />
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
  );
};

export default Header;
