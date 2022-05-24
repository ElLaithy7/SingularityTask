import React from "react";
import Main from "./Components/Main/Main";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#080808",
      },
      secondary: {
        main: "#FBF9FA",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
