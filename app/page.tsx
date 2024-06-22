import Page from '@/components/Page';
import { Box, Typography } from '@mui/material';
import config from '../config/config.json';
import ImageTile from '@/components/ImageTile';

export default function ResourcePage() {
  const { title, description } = config.HOME;
  return (
    <Page title={title} description={description}>
      <Box>
        <Typography>Add stuff here</Typography>
        <ImageTile />
      </Box>
    </Page>
  );
}
