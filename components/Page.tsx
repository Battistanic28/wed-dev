import NavBar from "./NavBar";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";



export default function Page({ children, title, description }) {
  return (
    <>
      <NavBar />
      <Typography variant="h1">
        {title}
      </Typography>
      <Typography variant="body2">
        {description}
      </Typography>
      <Box>{children}</Box>
    </>
  );
}
