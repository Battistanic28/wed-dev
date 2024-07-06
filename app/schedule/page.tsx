import Page from '@/components/Page';
import InfoCard from '@/components/InfoCard';
import config from '../../config/config.json';

export default function SchedulePage() {
  const { title, description } = config.SCHEDULE;
  return (
    <Page title={title} description={description}>
      <InfoCard
        title="Wednesday - June 25th 2025"
        description="Welcome party 5pm"
      />
      <InfoCard title="Thursday - June 26th 2025" description="Ceremony 5pm" />
      <InfoCard title="Friday - June 27th 2025" description="Brunch 10am" />
    </Page>
  );
}
