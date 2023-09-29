import 'styled-components';
import Theme from 'styles/theme';

type ThemeData = typeof Theme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeData {}
}
