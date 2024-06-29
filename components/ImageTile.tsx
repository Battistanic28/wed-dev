import Image from 'next/image';
import { Box, Typography } from '@mui/material';

interface ImageTileProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

const ImageTile = ({ src, alt, title, subtitle }: ImageTileProps) => {
  const textProps = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <Box position="relative" width="100%">
      <Image
        alt={alt}
        src={src}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
      <Box sx={textProps}>
        {title && <Typography variant="h2">{title}</Typography>}
        {subtitle && <Typography variant="h3">{subtitle}</Typography>}
      </Box>
    </Box>
  );
};

export default ImageTile;
