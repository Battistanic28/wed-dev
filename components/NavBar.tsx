import { Toolbar, Box, useMediaQuery } from '@mui/material';
import { NavContent, NavLinks } from './styles';
import NavLink from './NavLink';
import config from '../config/config.json';
import HanburgerMenu from './HamburgerMenu';
import Link from 'next/link';

export default function NavBar() {
  const configKeys = Object.keys(config);
  // TODO: reference theme breakpoints
  const isMobile = useMediaQuery('(max-width:700px)');

  return (
    <Toolbar sx={NavContent} variant="dense">
      {/* TODO: determine way to style with sx prop instead*/}
      <Link
        href="/"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          position: 'fixed',
          left: '1rem',
        }}
      >
        N + K
      </Link>
      {isMobile ? (
        <HanburgerMenu navLinks={configKeys} />
      ) : (
        <Box sx={NavLinks}>
          {configKeys.map((key) => {
            if (!key.startsWith('_')) {
              const configItem = config[key as keyof typeof config];
              return (
                <NavLink
                  key={key}
                  title={configItem.title}
                  href={configItem.href}
                />
              );
            }
          })}
        </Box>
      )}
    </Toolbar>
  );
}
