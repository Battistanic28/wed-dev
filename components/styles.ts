import { SxProps } from '@mui/material';

// Page
const PageBody: SxProps = {
  width: '100%',
  height: '100vh',
  backgroundColor: '#C6C358',
};

const PageFooter: SxProps = {
  textAlign: 'center',
  position: 'fixed',
  bottom: '2rem',
  width: '100%',
};

// Welcome page styles
const WelcomeHeroStyles: SxProps = {
  lineHeight: '4.5rem',
  margin: '4rem auto',
  fontFamily: 'Meriah',
  fontSize: '100px',
  maxWidth: '600px',
  textAlign: 'center',
  color: '#FEEDE5',
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

const NavLogo: SxProps = {
  fontFamily: 'SpaceMono',
  fontSize: '1.5rem',
  textDecoration: 'none',
  color: '#654A4E',
  position: 'fixed',
  top: '.5rem',
  left: '1rem',

  '&:hover': {
    textTransform: 'uppercase',
  },
};

const NavLink: SxProps = {
  '&:hover': {
    textDecoration: 'underline',
    textDecorationStyle: 'dotted',
    textUnderlineOffset: '.25rem',
  },
};

const TransitionElement: SxProps = {
  // width: '100vw',
  // height: '100vh',
  // backgroundColor: 'black',
  // 'z-index': '100',
  // position: 'fixed',
  // top: 0,
  // left: 0,
};

export {
  WelcomeHeroStyles,
  WelcomeInfoStyles,
  PageBody,
  PageFooter,
  NavContent,
  NavLinks,
  NavLink,
  NavLogo,
  TransitionElement,
};
