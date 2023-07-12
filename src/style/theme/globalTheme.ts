const ligthColors = {};
const darkColors = {};
const fontSizes = {
  h1: 36,
  h2: 32,
  h3: 28,
  h4: 20,
  h5: 16,
  h6: 12,
};

export const getModeColors = (mode: string) => {
  return mode === 'dark' ? darkColors : ligthColors;
};

export const getFontSize = (size: string) => {
  //@ts-ignore
  return fontSizes[size];
};
