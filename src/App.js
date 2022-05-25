import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { createTheme } from "@mui/system";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {

  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette:{
      mode:mode,
    }
  })
  return (
    // <ThemeProvider theme={darkTheme}>

    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    // </ThemeProvider>
  );
}

export default App;
