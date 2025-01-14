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
`;

export const FooterParagraph = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 15.6px;
  color: ${({ theme }) => theme.color.slateGray};
  margin: 0;
`;

export const FooterEmail = styled.a`
  font-size: 32px;
  font-weight: 900;
  line-height: 38.73px;
  color: ${({ theme }) => theme.color.mineShaft};
  margin: 0;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.scienceBlue};
    cursor: pointer;
  }
`;

export const FooterDescrtiption = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  color: ${({ theme }) => theme.color.mineShaft};
  text-align: justify;
  padding-bottom: 32px;
  margin: 0;
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledGitBlack = styled(StyledGitIcon)`
  fill: ${({ theme }) => theme.color.mineShaft} !important;
  width: 48px;
  height: 48px;
  margin-right: 24px;
  margin-bottom: 0;
  pointer-events: bounding-box;

  :hover {
    fill: ${({ theme }) => theme.color.scienceBlue};
    cursor: pointer;
  }
`;

export const StyledLinkedinIcon = styled(LinkedinIcon)`
  width: 48px;
  height: 48px;
  pointer-events: bounding-box;

  :hover {
    fill: ${({ theme }) => theme.color.scienceBlue};
    cursor: pointer;
  }
`;
