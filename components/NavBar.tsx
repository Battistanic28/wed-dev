import { Toolbar, Typography, Box } from '@mui/material';
import { NavContent, NavIcon, NavLinks } from './styles';
import NavLink from './NavLink';
import config from '../config/config.json';

export default function NavBar() {
  const configKeys = Object.keys(config);
  return (
    <Toolbar sx={NavContent}>
      <Typography sx={NavIcon} variant="h5">
        N + K
      </Typography>
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
    </Toolbar>
  );
}
