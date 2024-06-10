import Page from "@/components/Page";
import config from '../../config/config.json'

export default function StoryPage() {
  const { title } = config.STORY
  return (
    <Page title={title} />
  );
}