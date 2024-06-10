import Link from "next/link";
import { Toolbar } from "@mui/material";

export default function NavBar() {
  return (
      <Toolbar sx={{display: 'flex', gap: 2}}>
        <Link style={{ textDecoration: 'none' }} href="/">Home</Link>
        <Link style={{ textDecoration: 'none' }} href="/rsvp">RSVP</Link>
        <Link style={{ textDecoration: 'none' }} href="/lodging">Lodging</Link>
        <Link style={{ textDecoration: 'none' }} href="/resources">Resources</Link>
      </Toolbar>
  );
}
