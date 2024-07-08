import { SxProps } from '@mui/material';

// Page
const PageBody: SxProps = {
  width: '100%',
  height: '100vh',
  backgroundColor: '#F8CECA',
};

// Welcome page styles
const WelcomeHeroStyles: SxProps = {
  lineHeight: '4.5rem',
  textShadow: '3px 3px #FEEDE5',
  margin: '4rem auto',
  fontFamily: 'Sentir',
  fontSize: '80px',
  maxWidth: '500px',
  textAlign: 'center',
  color: '#FE9833',
};

const WelcomeInfoStyles: SxProps = {
  margin: '4rem auto',
  textAlign: 'center',
};

// Nav
const NavContent: SxProps = {
  display: 'flex',
  justifyContent: 'center',
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
  WelcomeInfoStyles,
  PageBody,
  NavContent,
  NavLinks,
  NavLink,
  TransitionElement,
};
