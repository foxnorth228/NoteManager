import { createTheme } from '@mui/material';

interface CustomColor {
  main: string;
  background: string;
}

declare module '@mui/material/styles' {
  interface Palette {
    custom: CustomColor;
  }

  interface PaletteOptions {
    custom: CustomColor;
  }
}

const theme = createTheme({
  palette: {
    custom: {
      main: '#0466c8',
      background: '#fefdfc',
    },
  },
});

export default theme;
