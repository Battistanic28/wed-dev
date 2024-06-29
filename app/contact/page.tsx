import Page from '@/components/Page';
import config from '../../config/config.json';

import { Box } from '@mui/material';

export default function ResourcePage() {
  const { heading, description } = config.CONTACT;
  return (
    <Page title={heading} description={description}>
      <Box textAlign="center" mt={2}>
        Contact us
      </Box>
    </Page>
  );
}
