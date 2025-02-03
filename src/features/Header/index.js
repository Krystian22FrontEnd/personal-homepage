import {
  HeaderContainer,
  HeaderImage,
  HeaderColumnWrapper,
  HeaderParagraph,
  HeaderH2,
  HeaderDescription,
  HeaderButton,
  HeaderMessageIcon,
} from "./styled";
import Me from "../../images/Krystian.jpg";
import email from "../../email";

const Header = ({ themeButton }) => {
  return (
    <>
      {themeButton}
      <HeaderContainer>
        <HeaderImage src={Me} alt="Krystian Krupiński" />
        <HeaderColumnWrapper>
          <HeaderParagraph>THIS IS</HeaderParagraph>
          <HeaderH2>Krystian Krupiński</HeaderH2>
          <HeaderDescription>
            👨🏻‍💻 "I'm a Frontend Developer who loves to work in React and is
            currently looking for new job opportunities."
          </HeaderDescription>
          <HeaderButton href={`mailto:${email}`} title={email}>
            <HeaderMessageIcon />
            Hire me
          </HeaderButton>
        </HeaderColumnWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
