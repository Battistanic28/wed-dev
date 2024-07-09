import { SxProps } from '@mui/material';

// Page
const PageBody: SxProps = {
  width: '100%',
  height: '100vh',
  backgroundColor: '#C6C358',
};

// Welcome page styles
const WelcomeHeroStyles: SxProps = {
  lineHeight: '4.5rem',
  // textShadow: '1px 1px #FEEDE5',
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

const NavLink: SxProps = {
  '&:hover': {
    textDecoration: 'underline',
    textDecorationStyle: 'dotted',
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
  NavContent,
  NavLinks,
  NavLink,
  TransitionElement,
};
