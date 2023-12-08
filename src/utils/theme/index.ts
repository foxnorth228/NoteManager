import { createTheme } from '@mui/material';

interface CustomColor {
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
      background: 'white',
    },
  },
});

export default theme;
