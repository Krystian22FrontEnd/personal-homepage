import styled from "styled-components";
import { ReactComponent as Ellipse } from "../../icons/Ellipse-spinner.svg";

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 88px 0 140px 0;

  @media (max-width: ${({theme}) => theme.breakpoint.mobile}) {
    margin: 44px 0 70px 0;
  }
`;

export const LoadingText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  margin: 0 0 48px 0;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({theme}) => theme.breakpoint.mobile}) {
    font-size: 17px;
    margin: 0 0 24px 0;
  }
`;

export const Loader = styled(Ellipse)`
  align-self: center;
  animation: spin;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoint.mobile}) {
    width: 80px;
    height: 80px;
  }
`;
