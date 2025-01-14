import styled from "styled-components";
import { ReactComponent as DangerIcon } from "../../icons/Danger.svg";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 88px 0 140px 0;
  gap: 32px;
`;

export const StyledDangerIcon = styled(DangerIcon)`
  width: 48px;
  height: 48px;
`;

export const ErrorHeader = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  margin: 0;
  margin-top: -16px;
`;

export const ErrorParagraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
`;
export const ErrorButtonLink = styled.a`
  font-size: 20.06px;
  font-weight: 600;
  line-height: 24.28px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.scienceBlue};
  padding: 12px 16px;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.darkIron};
    cursor: pointer;
  }
`;
