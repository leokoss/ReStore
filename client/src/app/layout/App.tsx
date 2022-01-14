import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Container } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {

  const [darkMode, setDarkmode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog />
      </Container>

    </ThemeProvider>
  );
}

export default App;
