import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { ImageOverlayText } from './styles';

interface ImageTileProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

const ImageTile = ({ src, alt, title, subtitle }: ImageTileProps) => {
  return (
    <Box position="relative" width="100%">
      <Image
        alt={alt}
        src={src}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '4px',
          boxShadow: '10px',
        }}
      />
      <Box sx={ImageOverlayText}>
        {title && <Typography variant="h2">{title}</Typography>}
        {subtitle && <Typography variant="h3">{subtitle}</Typography>}
      </Box>
    </Box>
  );
};

export default ImageTile;
