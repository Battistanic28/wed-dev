import Page from '@/components/Page';
import AccordianList from '@/components/AccordianList';
import config from '../../config/config.json';

export default function ResourcePage() {
  const { title, categories } = config.RESOURCES;
  return (
    <Page title={title}>
      <AccordianList items={categories} />
    </Page>
  );
}
