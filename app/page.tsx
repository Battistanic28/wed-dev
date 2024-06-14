import Page from "@/components/Page";
import config from '../config/config.json'


export default function ResourcePage() {
  const { title } = config.HOME
  return (
    <Page title={title} />
  );
}