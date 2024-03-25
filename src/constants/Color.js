export const THEMES = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};

export const THEME_COLORS = {
  LIGHT: {
    Body: "white",
    Text: "black",
  },
  DARK: {
    Body: "grey",
    Text: "white",
  },
};

export const COLORS = (theme = THEMES.LIGHT) => {
  return THEME_COLORS[theme] || THEME_COLORS[THEMES.LIGHT];
};
