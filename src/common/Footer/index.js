import {
  FooterWrapper,
  FooterParagraph,
  FooterEmail,
  FooterDescrtiption,
  FooterLinks,
  StyledGitBlack,
  StyledLinkedinIcon,
} from "./styled";
import linkedin from "../PersonalData/linkedin";
import github from "../PersonalData/github";
import email from "../PersonalData/email";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterParagraph>Let's talk</FooterParagraph>
      <FooterEmail href={`mailto:${email}`}>{email}</FooterEmail>
      <FooterDescrtiption>
        I'm always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to contact me.
      </FooterDescrtiption>
      <FooterLinks>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          href={github}
        >
          <StyledGitBlack />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
          href={linkedin}
        >
          <StyledLinkedinIcon />
        </a>
      </FooterLinks>
    </FooterWrapper>
  );
};

export default Footer;
