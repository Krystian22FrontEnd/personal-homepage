import styled from "styled-components";
import { ReactComponent as LinkedinIcon } from "../../icons/LinkedIN_black.svg";
import { StyledGitIcon } from "../PorfolioSection/styled";

export const FooterWrapper = styled.div`
  max-width: 691px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 120px 0 109px 0;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}) {
    margin: 120px 16px 109px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 288px;
    margin: 48px 16px 31px 16px;
    gap: 12px;
  }
`;

export const FooterParagraph = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 15.6px;
  color: ${({ theme }) => theme.site.textSecondary};
  margin: 0;
`;

export const FooterEmail = styled.a`
  font-size: 32px;
  font-weight: 900;
  line-height: 38.73px;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    line-height: 21.78px;
  }
`;

export const FooterDescrtiption = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: justify;
  padding-bottom: 32px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 16.94px;
    padding-bottom: 40px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledGitBlack = styled(StyledGitIcon)`
  fill: ${({ theme }) => theme.colors.secondary} !important;
  width: 48px;
  height: 48px;
  margin-right: 24px;
  margin-bottom: 0;
  pointer-events: bounding-box;

  :hover {
    fill: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`;

export const StyledLinkedinIcon = styled(LinkedinIcon)`
  fill: ${({ theme }) => theme.colors.secondary} !important;
  width: 48px;
  height: 48px;
  margin-right: 24px;
  pointer-events: bounding-box;

  :hover {
    fill: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`;
