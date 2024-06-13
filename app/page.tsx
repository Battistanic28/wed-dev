import Page from "@/components/Page";
import config from '../config/config.json'
import { getAttendees } from "@/api/helpers/getAttendees";

export default function ResourcePage() {
  const { title } = config.HOME
  getAttendees()
  return (
    <Page title={title} />
  );
}