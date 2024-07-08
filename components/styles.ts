import { SxProps } from '@mui/material';

// Page
const PageBody: SxProps = {
  width: '100%',
  height: '100vh',
  backgroundColor: '#F8CECA',
};

// Welcome page styles
const WelcomeHeroStyles: SxProps = {
  margin: 'auto',
  textAlign: 'center',
  fontFamily: 'Sentir',
  fontSize: '80px',
  maxWidth: '500px',
  color: '#FE9833',
};

// Nav
const NavContent: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: 2,
};

const NavLinks: SxProps = {
  display: 'flex',
  gap: 2,
};

const NavLink: SxProps = {
  '&:hover': {
    textDecoration: 'underline',
    textDecorationStyle: 'dotted',
  },
};

const TransitionElement: SxProps = {
  width: '100vw',
  height: '100vh',
  backgroundColor: 'black',
  'z-index': '100',
  position: 'fixed',
  top: 0,
  left: 0,
};

export {
  WelcomeHeroStyles,
  PageBody,
  NavContent,
  NavLinks,
  NavLink,
  TransitionElement,
};
