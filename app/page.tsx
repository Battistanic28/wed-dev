import Page from '@/components/Page';
import config from '../config/config.json';
import ImageTile from '@/components/ImageTile';
import TransitionLink from '@/components/TransitionLink';
import { Box } from '@mui/material';
import { WelcomeHeroStyles } from '../components/styles';
// import Link from 'next/link';

export default function ResourcePage() {
  const { title, description } = config._HOME;
  return (
    <Page>
      <Box sx={WelcomeHeroStyles}> We're getting married! </Box>
      {/* <ImageTile
        src="/boulder.jpg"
        alt="boulder"
        title={title}
        subtitle={description}
      />
      <Box textAlign="center" mt={2}>
        <TransitionLink href="/rsvp" label="RSVP" />
      </Box> */}
    </Page>
  );
}
