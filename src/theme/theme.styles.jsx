import './fonts/PierceRegular-6OWY.ttf';
import './theme.styles.css';

const THEME = {
  black: '#16151B',
  text: '#FCFDFC',
  icons: '#939297',
  grey: '#383B44',
  lightblue: '#C0DEDE',
  purple: '#E6E0F0',
  yellow: '#F2EFEA',
  skin: '#F0E1DF',
  focus: '#E35933',
};

export const fontStyle = (
  family,
  color,
  fontWeight,
  textAlign,
  size,
  lineHeight,
  letterSpacing
) => `
font-family: ${family}, 'Segoe UI', 'Roboto';
color: ${color};
font-weight: ${fontWeight};
text-align: ${textAlign};
font-size: ${size}px;
line-height: ${lineHeight}px;
letter-spacing: ${letterSpacing}px
`;

export default THEME;
