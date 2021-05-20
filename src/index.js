import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "typeface-poppins";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider
      theme={extendTheme({ fonts: { heading: "Poppins", body: "Poppins" } })}
    >
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
