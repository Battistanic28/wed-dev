import { Typography } from '@mui/material';
import config from '../../config/config.json';

export default function ResourcePage() {
  const { title } = config.AUTH;

  return (
    <>
      <Typography
        variant="h1"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        Nick & Kitty
      </Typography>
      <Typography variant="h2">{title}</Typography>
    </>
  );
}
