import Page from "@/components/Page";
import config from '../config/config.json'
import { Box, Typography } from "@mui/material";


export default function ResourcePage() {
  const { title, description } = config.HOME
  return (
    <Page title={title} description={description}>
      <Box>
        <Typography>Add stuff here</Typography>
      </Box>
    </Page>
  );
}