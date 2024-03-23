import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000",
    },
    text: {
      primary: "#ed1c23",
      secondary: "#000",
      info: "white",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  transitions: {
    easing: {
      // This is the most common easing curve.
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
});

export const ContainerBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.up("md")]: {
    padding: "2rem 3vw 2rem 3vw",
  },
  [theme.breakpoints.down("md")]: {
    padding: "2rem 3vw 2rem 3vw",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 5vw 2rem 5vw",
  },
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.info,
  minHeight: "100vh",
}));
