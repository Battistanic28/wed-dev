import Page from '@/components/Page';
import config from '../../config/config.json';
import ImageTile from '@/components/ImageTile';

export default function StoryPage() {
  const { title } = config.STORY;
  return (
    <Page title={title}>
      <ImageTile src="/hawaii.png" alt="hawaii" />
    </Page>
  );
}
