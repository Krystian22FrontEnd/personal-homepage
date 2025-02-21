import {
  SwitchWrapper,
  StyledSunIcon,
  SwitchContainer,
  SwitchCircle,
  StyledMoonIcon,
} from "../styled";

interface SwitchThemeProps {
  onToggleTheme: () => void;
  isDark: boolean;
}

export const SwitchTheme = ({ onToggleTheme, isDark }: SwitchThemeProps) => {
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
