import {
  FooterWrapper,
  FooterParagraph,
  FooterEmail,
  FooterDescrtiption,
} from "./styled";
import { SocialMedia } from "./SocialMedia";
import email from "../../email";

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
      <SocialMedia />
    </FooterWrapper>
  );
};

export default Footer;
