import styled from "styled-components";
import { ReactComponent as MessageIcon } from "../../icons/Message.svg";
import { ReactComponent as ToggleOffLightIcon } from "../../icons/ToggleOffLight.svg";

export const HeaderSwitchButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderSwitchButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
`;

export const HeaderToggleOffIcon = styled(ToggleOffLightIcon)`
  width: 48px;
  height: 26px;
`;
export const Span = styled.span`
  padding-right: 12px;
  font-size: 12px;
  font-weight: 700;
  line-height: 15.6px;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 66px;
  align-items: center;
  margin-bottom: 73px;
`;

export const HeaderImage = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 360px;
  margin-right: 66px;
`;

export const HeaderColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderParagraph = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 15.6px;
  color: ${({ theme }) => theme.color.slateGray};
  margin: 0;
  padding-bottom: 12px;
`;

export const HeaderH2 = styled.h2`
  font-size: 38px;
  font-weight: 900;
  line-height: 45.99px;
  margin: 0;
  padding-bottom: 35px;
  color: ${({ theme }) => theme.color.mineShaft};
`;

export const HeaderDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: ${({ theme }) => theme.color.slateGray};
  margin: 0;
  padding-bottom: 32px;
`;

export const HeaderButton = styled.a`
  font-size: 20.06px;
  font-weight: 600;
  line-height: 24.28px;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid;
  width: 154px;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: space-around;
  text-decoration: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.darkIron};
    cursor: pointer;
  }
`;

export const HeaderMessageIcon = styled(MessageIcon)`
  width: 24px;
  height: 24px;
`;
