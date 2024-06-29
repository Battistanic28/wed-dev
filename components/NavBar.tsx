import { Toolbar, Typography, Box, useMediaQuery } from '@mui/material';
import { NavContent, NavIcon, NavLinks } from './styles';
import NavLink from './NavLink';
import config from '../config/config.json';
import HanburgerMenu from './HamburgerMenu';

export default function NavBar() {
  const configKeys = Object.keys(config);
  // TODO: reference theme breakpoints
  const isMobile = useMediaQuery('(max-width:700px)');

  return (
    <Toolbar sx={NavContent}>
      <Typography sx={NavIcon} variant="h5">
        N + K
      </Typography>
      {isMobile ? (
        <HanburgerMenu navLinks={configKeys} />
      ) : (
        <Box sx={NavLinks}>
          {configKeys.map((key) => {
            const configItem = config[key as keyof typeof config];
            return (
              <NavLink
                key={key}
                title={configItem.title}
                href={configItem.href}
              />
            );
          })}
        </Box>
      )}
    </Toolbar>
  );
}
