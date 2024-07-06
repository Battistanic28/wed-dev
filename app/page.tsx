import Page from '@/components/Page';
import config from '../config/config.json';
import ImageTile from '@/components/ImageTile';
import { Box, Button } from '@mui/material';

export default function ResourcePage() {
  const { title, description } = config._HOME;
  return (
    <Page>
      <ImageTile
        src="/boulder.jpg"
        alt="boulder"
        title={title}
        subtitle={description}
      />
      <Box textAlign="center" mt={2}>
        <Button href="/rsvp" variant="contained" color="primary">
          RSVP
        </Button>
      </Box>
    </Page>
  );
}
