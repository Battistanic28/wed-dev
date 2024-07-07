import { SxProps } from '@mui/material';

// Page
const BackgroundImage: SxProps = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  zIndex: -1,
};

const PageBackground: SxProps = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // background: 'linear-gradient(135deg, #FF9602 0%, #ED1601 100%)',
  margin: 0,
  padding: 0,
  position: 'relative',
};

const PageBody: SxProps = {
  height: '80vh',
  width: '65%',
  textAlign: 'center',
  backgroundColor: '#F8F5DF',
  borderRadius: 2,
  boxShadow: 3,
  paddingLeft: 3,
  paddingRight: 3,
  maxWidth: '700px',
};

const PageContent: SxProps = {
  // Add any other styles you need for PageContent
};

// ImageTile
const ImageOverlayText = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  textAlign: 'center',
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

export {
  BackgroundImage,
  PageBackground,
  PageBody,
  PageContent,
  NavContent,
  NavLinks,
  ImageOverlayText,
};
