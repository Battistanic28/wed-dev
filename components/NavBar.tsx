import { Toolbar, Box, useMediaQuery } from '@mui/material';
import { NavContent, NavLinks, NavLogo } from './styles';
import NavLink from './NavLink';
import config from '../config/config.json';
import HanburgerMenu from './HamburgerMenu';
import NextLink from 'next/link';
import { Link as MUILink } from '@mui/material';

export default function NavBar() {
  const configKeys = Object.keys(config);
  // TODO: reference theme breakpoints
  const isMobile = useMediaQuery('(max-width:700px)');

  return (
    <Toolbar sx={NavContent} variant="dense">
      <NextLink href="/" passHref>
        <MUILink sx={NavLogo}>n+k</MUILink>
      </NextLink>
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
