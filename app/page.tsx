import Page from '@/components/Page';
import config from '../config/config.json';
import ImageTile from '@/components/ImageTile';
import { Box, Button } from '@mui/material';

export default function ResourcePage() {
  const { heading, description } = config._HOME;
  return (
    <Page title={heading} description={description}>
      <ImageTile
        src="/boulder.jpg"
        alt="boulder"
        title="Nick + Kitty"
        subtitle="6 • 26 • 25"
      />
      <Box textAlign="center" mt={2}>
        <Button href="/rsvp" variant="contained" color="primary">
          RSVP
        </Button>
      </Box>
    </Page>
  );
}
