import { useState, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import NavLink from './NavLink';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import config from '../config/config.json';

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
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
          <MenuIcon />
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
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
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
