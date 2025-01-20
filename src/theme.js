export const theme = {
  color: {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    mischka: "#E5E4E7",
    jordyBlue: "#9ec6f5",
    dodgerBlue: "#2188FF",
    scienceBlue: "#0366D6",
    slateGray: "#6E7E91",
    darkHeather: "#B9C6D480",
    darkIron: "#D1D5DA4D",
    semiGray: "#D1D5DA1A",
    semiDark: "#363636B8",
    darkViolet: "#090A3308",
    mineShaft: "#252525",
    anakiwa: "#8CC2FF",
  },
  breakpoint: {
    iphoneSE: "376px",
    mobile: "767px",
    tabletHorizontal: "1199px",
  },
};

export const lightTheme = {
  ...theme,
  colors: {
    primary: theme.color.scienceBlue,
    secondary: theme.color.mineShaft,
  },

  site: {
    background: theme.color.whiteLilac,
    textSecondary: theme.color.slateGray,
  },

  button: {
    text: theme.color.white,
    border: theme.color.darkIron,
    shadow: theme.color.anakiwa,
  },
  sectionBackground: theme.color.white,
  headerUnderline: theme.color.darkIron,

  portfolio: {
    border: theme.color.darkIron,
    borderHover: theme.color.jordyBlue,
    header: theme.color.scienceBlue,
    shadow: theme.color.darkViolet,
  },

  themeSwitch: {
    background: theme.color.ironTransparent,
    icon: theme.color.white,
    iconBox: theme.color.slateGray,
    border: theme.color.slateGray,
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    primary: theme.color.dodgerBlue,
    secondary: theme.color.white,
  },

  site: {
    background: theme.color.mineShaft,
    textSecondary: theme.color.white,
  },

  button: {
    text: theme.color.white,
    border: theme.color.darkIron,
    shadow: theme.color.anakiwa,
  },
  sectionBackground: theme.color.semiDark,
  headerUnderline: theme.color.semiGray,

  portfolio: {
    border: theme.color.semiGray,
    borderHover: theme.color.dodgerBlue,
    header: theme.color.white,
    shadow: theme.color.darkViolet,
  },

  themeSwitch: {
    background: theme.color.mineShaft,
    icon: theme.color.mineShaft,
    iconBox: theme.color.white,
    border: theme.color.white,
  },
};
