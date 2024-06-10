import NavBar from "./NavBar";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";



export default function Page({ children, title, description }) {
  return (
    <>
      <Typography variant="h1" sx={{display: 'flex', justifyContent:'center'}}>Nick & Kitty</Typography>
      <NavBar />
      <Typography variant="h2">
        {title}
      </Typography>
      <Typography variant="body2">
        {description}
      </Typography>
      <Box>{children}</Box>
    </>
  );
}
