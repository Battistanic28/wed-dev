import { SxProps } from '@mui/material';

// Page
const PageBody: SxProps = {
  textAlign: 'center',
  margin: 'auto',
};

const PageContent: SxProps = {
  marginTop: 3,
};

// NavBar

const NavContent: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '100%',
};

const NavIcon: SxProps = {
  justifyContent: 'left',
};

const NavLinks: SxProps = {
  // textAlign: 'center',
  display: 'flex',
  gap: 2,
};

export { PageBody, PageContent, NavContent, NavIcon, NavLinks };
