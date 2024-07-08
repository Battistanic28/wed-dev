import Page from '@/components/Page';
import { Box } from '@mui/material';
import { WelcomeHeroStyles } from '../components/styles';

export default function ResourcePage() {
  return (
    <Page>
      <Box sx={WelcomeHeroStyles}>We're getting married!</Box>
    </Page>
  );
}
