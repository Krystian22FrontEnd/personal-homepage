import styled from "styled-components";
import { ReactComponent as MessageIcon } from "../../icons/Message.svg";
import { ReactComponent as sunIcon } from "../../icons/sunIcon.svg";
import { ReactComponent as moonIcon } from "../../icons/moonIcon.svg";

export const SwitchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.themeSwitch.icon};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}) {
    margin-right: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-right: 17px;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 48px;
  height: 26px;
  background-color: ${({ theme }) => theme.themeSwitch.background};
  border-radius: 24px;
  padding: 0 2px 0;
  cursor: pointer;
  position: relative;
  transition: background-color 1s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 30px;
    height: 16px;
  }
`;

export const SwitchCircle = styled.div<{$isDark: boolean}>`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.themeSwitch.icon};
  border-radius: 50%;

  transition: transform 0.5s ease-in-out;
  transform: ${({ $isDark }) =>
    $isDark ? "translateX(24px)" : "translateX(0)"};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 12px;
    height: 12px;
    transform: ${({ $isDark }) =>
      $isDark ? "translateX(14px)" : "translateX(0)"};
  }
`;
export const StyledSunIcon = styled(sunIcon)`
  width: 30px;
  height: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledMoonIcon = styled(moonIcon)`
  width: 30px;
  height: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 20px;
    height: 20px;
  }
`;

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 66px;
  align-items: center;
  margin-bottom: 73px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 0 27px 48px 16px;
  }
`;

export const HeaderImage = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 360px;
  margin-right: 66px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}) {
    margin: 0 0 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 128px;
    height: 128px;
    margin-right: 0;
  }
`;

export const HeaderColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}) {
    margin-right: 16px;
  }
`;

export const HeaderParagraph = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 15.6px;
  color: ${({ theme }) => theme.site.textSecondary};
  margin: 0;
  padding-bottom: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding-bottom: 8px;
  }
`;

export const HeaderH2 = styled.h2`
  font-size: 38px;
  font-weight: 900;
  line-height: 45.99px;
  margin: 0;
  padding-bottom: 35px;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 22px;
    line-height: 26.63px;
    padding-bottom: 16px;
  }
`;

export const HeaderDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: ${({ theme }) => theme.site.textSecondary};
  margin: 0;
  padding-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 17px;
    line-height: 23.8px;
    padding-bottom: 24px;
    text-align: justify;
  }
`;

export const HeaderButton = styled.a`
  font-size: 20.06px;
  font-weight: 600;
  line-height: 24.28px;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  width: 154px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.button.text};
  display: flex;
  justify-content: space-around;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.button.shadow};
    cursor: pointer;
    transition: box-shadow 0.3s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 18px;
    line-height: 21.78px;
    width: 138px;
  }
`;

export const HeaderMessageIcon = styled(MessageIcon)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 20px;
    height: 20px;
  }
`;
