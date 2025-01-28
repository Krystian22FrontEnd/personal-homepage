import {
  SwitchWrapper,
  StyledSunIcon,
  SwitchContainer,
  SwitchCircle,
  StyledMoonIcon,
} from "../styled";

export const SwitchTheme = ({ onToggleTheme, isDark }) => {
  return (
    <SwitchWrapper>
      <StyledSunIcon />
      <SwitchContainer onClick={onToggleTheme}>
        <SwitchCircle $isDark={isDark} />
      </SwitchContainer>
      <StyledMoonIcon />
    </SwitchWrapper>
  );
};
