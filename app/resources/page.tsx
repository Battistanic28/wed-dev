import Page from "@/components/Page";
import config from '../../config/config.json'
import AccordianList from "@/components/AccordianList";

export default function ResourcePage() {
  const { title, categories } = config.RESOURCES
  return (
    <Page title={title} >
      <AccordianList items={categories} />
    </Page>
  );
}
