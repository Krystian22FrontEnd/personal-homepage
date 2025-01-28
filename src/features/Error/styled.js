import styled from "styled-components";
import { ReactComponent as DangerIcon } from "../../icons/Danger.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 88px 0 140px 0;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 44px 0 70px 0;
    gap: 26px;
  }
`;

export const StyledDangerIcon = styled(DangerIcon)`
  width: 48px;
  height: 48px;
`;

export const Text = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  margin: 0;
  margin-top: -16px;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 17px;
    line-height: 26.05px;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ButtonLink = styled.a`
  font-size: 20.06px;
  font-weight: 600;
  line-height: 24.28px;
  color: ${({ theme }) => theme.button.text};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 12px 16px;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.button.shadow};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 15px;
    line-height: 18px;
    padding: 10px 14px;
  }
`;
