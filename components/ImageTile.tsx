import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';

const ImageTile = () => {
  const textProps = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  };

  return (
    <>
      <Image
        alt="bridge"
        src="/bridge.jpg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
      <Box sx={textProps}>
        <Typography variant="h3">Nick + Kitty</Typography>
        <Typography variant="h2">6.26.25</Typography>
      </Box>
      <Box>
        <Button href="/rsvp">RSVP</Button>
      </Box>
    </>
  );
};

export default ImageTile;
