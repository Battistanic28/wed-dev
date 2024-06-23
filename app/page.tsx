import Page from '@/components/Page';
import config from '../config/config.json';
import ImageTile from '@/components/ImageTile';

export default function ResourcePage() {
  const { heading, description } = config.HOME;
  return (
    <Page title={heading} description={description}>
      <ImageTile />
    </Page>
  );
}
