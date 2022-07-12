import { createTheme } from "@mui/material"
import { blue, green, grey, red } from "@mui/material/colors"

const wakabuTheme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
    background: {
      default: grey[50],
      paper: red[300],
    },
    text: {
      primary: "black",
      secondary: "white",
      disabled: "grey",
    },
  },
})

export default wakabuTheme
