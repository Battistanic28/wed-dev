import AppBar from "./AppBar";
import { Box } from "@mui/material";


export default function Page({children}) {
    return (
      <>
        <AppBar />
        <Box>
            {children}
        </Box>
      </>

    );
  }