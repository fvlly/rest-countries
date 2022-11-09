import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({

  initialColorMode: 'light',
  useSystemColorMode: false,

  styles: {
    global: {
      "html,body": {
        scrollBehavior: "smooth",
      },
    },
  },

  colors:{
    fmLight :{
        300:'hsl(0, 0%, 100%)', //dm text lm elements
        500:'hsl(0, 0%, 98%)', //lm bg
        700:'hsl(0, 0%, 52%)', //lm input
    },
    fmDark :{
        300:'hsl(209, 23%, 22%)', //lm elements
        500:'hsl(207, 26%, 17%)', //dm bg
        700:'hsl(200, 15%, 8%)', //lm text
    },
  },

  fonts: {
    body: `'Nunito Sans', 'sans-serif'`,
    heading: `'Nunito Sans', 'sans-serif'`,
  },
  config: {
    cssVarPrefix: "nonD",
  },
});
