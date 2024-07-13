import { useState, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import NavLink from './NavLink';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import config from '../config/config.json';
import { Typography } from '@mui/material';

interface HamburgerMenuProps {
  navLinks: string[];
}

function HanburgerMenu({ navLinks }: HamburgerMenuProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {/* TODO: move to imported sx prop */}
      <Box sx={{ position: 'fixed', right: '1rem' }}>
        <IconButton onClick={handleOpenNavMenu} color="inherit">
          <Typography>Menu</Typography>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {navLinks.map((key) => {
            const configItem = config[key as keyof typeof config];

            return (
              <MenuItem key={key} onClick={handleCloseNavMenu}>
                <NavLink
                  key={key}
                  title={configItem.title}
                  href={configItem.href}
                />
              </MenuItem>
            );
          })}
        </Menu>
      </Box>
    </>
  );
}
export default HanburgerMenu;
