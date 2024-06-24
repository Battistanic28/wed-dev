import { SxProps } from '@mui/material';

// Page
const PageBackground: SxProps = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
  margin: 0,
  padding: 0,
};

const PageBody: SxProps = {
  width: '80%',
  textAlign: 'center',
  backgroundColor: 'white',
  borderRadius: 2,
  boxShadow: 3,
  padding: 3,
};

const PageContent: SxProps = {
  // Add any other styles you need for PageContent
};

// Nav
const NavContent: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '100%',
};

const NavIcon: SxProps = {
  justifyContent: 'left',
};

const NavLinks: SxProps = {
  display: 'flex',
  gap: 2,
};

export { PageBackground, PageBody, PageContent, NavContent, NavIcon, NavLinks };
