import React from "react"
import HomePage from "./Pages/HomePage"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./Themes/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme>
        <HomePage />
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
