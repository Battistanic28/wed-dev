import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Link from "next/link";

export default function AppBar() {
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs aria-label="basic tabs example">
          <Link href="/">
            <Tab label="Home"></Tab>
          </Link>
          <Link href="/rsvp">
            <Tab label="RSVP"></Tab>
          </Link>
          <Link href="/lodging">
            <Tab label="Lodging"></Tab>
          </Link>
          <Link href="/schedule">
            <Tab label="Schedule"></Tab>
          </Link>
          <Link href="/resources">
            <Tab label="Resources"></Tab>
          </Link>
        </Tabs>
      </Box>
    </>
  );
}
