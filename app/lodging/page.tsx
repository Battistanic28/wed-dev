import Page from "@/components/Page";
import config from '../../config/config.json'

export default function LodgingPage() {
  const { title } = config.LODGING
  return (
    <Page title={title} />
  );
}