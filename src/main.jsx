import { ChakraProvider,ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import {theme} from './theme'

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.initialColorMode} />
    <App />
  </ChakraProvider>
);
