import Page from '@/components/Page';
import { Box, Typography } from '@mui/material';
import { WelcomeHeroStyles, WelcomeInfoStyles } from '../components/styles';

export default function ResourcePage() {
  return (
    <Page>
      {/* TODO: move to config*/}
      <Box sx={WelcomeHeroStyles}>We're getting married!</Box>
      <Box sx={WelcomeInfoStyles}>
        <Typography>Nick Battista & Catherine Plevak</Typography>
        <Typography>The Farmette ∙ Lyons, CO </Typography>
        <Typography>6∙26∙25</Typography>
      </Box>
    </Page>
  );
}
