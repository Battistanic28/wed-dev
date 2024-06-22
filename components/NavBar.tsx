import Link from 'next/link';
import { Toolbar, Typography, Box } from '@mui/material';
import { NavContent, NavIcon, NavLinks } from './styles';

export default function NavBar() {
  return (
    <Toolbar sx={NavContent}>
      <Typography sx={NavIcon} variant="h5">
        N + K
      </Typography>
      <Box sx={NavLinks}>
        <Link style={{ textDecoration: 'none' }} href="/">
          Home
        </Link>
        <Link style={{ textDecoration: 'none' }} href="/rsvp">
          RSVP
        </Link>
        <Link style={{ textDecoration: 'none' }} href="/story">
          Story
        </Link>
        <Link style={{ textDecoration: 'none' }} href="/resources">
          Resources
        </Link>
      </Box>
    </Toolbar>
  );
}
