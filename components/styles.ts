import { SxProps } from '@mui/material';

// Page
const BackgroundImage: SxProps = {
  // position: 'absolute',
  // top: 0,
  // left: 0,
  // height: '100%',
  // width: '100%',
  // zIndex: -1,
};

const PageBackground: SxProps = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  // alignItems: 'center',
  margin: 0,
  padding: 0,
  // position: 'relative',
  backgroundColor: '#F8CECA',
};

const PageBody: SxProps = {
  // height: '80vh',
  // width: '65%',
  // textAlign: 'center',
  // backgroundColor: '#F8F5DF',
  // borderRadius: 2,
  // boxShadow: 3,
  // paddingLeft: 3,
  // paddingRight: 3,
  // maxWidth: '700px',
};

const PageContent: SxProps = {
  '& > *': {
    marginBottom: 3,
  },
};

// Welcome page styles
const WelcomeHeroStyles: SxProps = {
  fontFamily: 'Sentir',
  fontSize: '80px',
  maxWidth: '500px',
  color: '#FE9833',
};

// Nav
const NavContent: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '100%',
};

const NavLinks: SxProps = {
  display: 'flex',
  gap: 2,
};

const NavLink: SxProps = {
  '&:hover': {
    textDecoration: 'underline',
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
  BackgroundImage,
  PageBackground,
  WelcomeHeroStyles,
  PageBody,
  PageContent,
  NavContent,
  NavLinks,
  NavLink,
  TransitionElement,
};
