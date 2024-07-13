import Page from '@/components/Page';
import config from '../../config/config.json';
import ImageList from '@/components/ImageList';

export default function StoryPage() {
  const { title } = config.STORY;
  return (
    <Page title={title}>
      <ImageList />
    </Page>
  );
}
