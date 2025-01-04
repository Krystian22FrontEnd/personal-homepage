import {
  FooterWrapper,
  FooterParagraph,
  FooterEmail,
  FooterDescrtiption,
  FooterLinks,
  StyledGitBlack,
  StyledLinkedinIcon,
} from "./styled"

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterParagraph>Let's talk</FooterParagraph>
      <FooterEmail>krupinskikrystian01@gmail.com</FooterEmail>
      <FooterDescrtiption>
        I'm always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to contact me.
      </FooterDescrtiption>
      <FooterLinks>
        <StyledGitBlack />
        <StyledLinkedinIcon />
      </FooterLinks>
    </FooterWrapper>
  );
};

export default Footer;
